import { isPlaceholderTeam } from "../utils/bracket";
import { getFlag } from "../data/flags";

const ROME_TZ = "Europe/Rome";
const ROUND_ORDER = ["R32", "R16", "QF", "SF", "FINAL"];
const ROUND_TITLES = { R32: "Round of 32", R16: "Round of 16", QF: "Quarter-finals", SF: "Semi-finals", FINAL: "Final" };
const CARD_HEIGHT = 96; // px, must match the fixed height used for column sizing

function formatKickoff(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    timeZone: ROME_TZ,
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function TeamRow({ name, score, isWinner, isDone }) {
  const placeholder = isPlaceholderTeam(name);
  const flag = placeholder ? "" : getFlag(name);
  return (
    <div className={`flex items-center justify-between px-2 py-1 gap-1 ${isDone && isWinner ? "font-bold" : ""}`}>
      <span className={`text-xs truncate ${placeholder ? "text-slate-500 italic" : "text-slate-100"}`}>
        {flag && <span className="mr-1">{flag}</span>}
        {name}
      </span>
      {score !== undefined && (
        <span className={`text-xs font-mono ml-1 shrink-0 ${isDone && isWinner ? "text-yellow-400" : "text-slate-300"}`}>
          {score}
        </span>
      )}
    </div>
  );
}

function MatchCard({ match }) {
  const done = !!match.result;
  const isPenWin = match.pen
    ? match.pen.s1 > match.pen.s2
      ? "team1"
      : "team2"
    : null;
  const winner = done
    ? match.result.s1 !== match.result.s2
      ? match.result.s1 > match.result.s2
        ? "team1"
        : "team2"
      : isPenWin
    : null;

  return (
    <div
      style={{ height: CARD_HEIGHT - 12 }}
      className="w-full bg-slate-800 border border-slate-700 rounded-lg shadow-sm flex flex-col justify-center overflow-hidden"
    >
      <div className="flex items-center justify-between px-2 pt-1 gap-1">
        <span className="text-[10px] text-slate-500 truncate">
          {done ? (match.pen ? "FT · Pens" : "FT") : formatKickoff(match.kickoff)}
        </span>
        <span className="text-[10px] text-slate-600 shrink-0">M{match.id}</span>
      </div>
      <TeamRow
        name={match.team1}
        score={done ? (match.pen ? `${match.result.s1} (${match.pen.s1})` : match.result.s1) : undefined}
        isWinner={winner === "team1"}
        isDone={done}
      />
      <TeamRow
        name={match.team2}
        score={done ? (match.pen ? `${match.result.s2} (${match.pen.s2})` : match.result.s2) : undefined}
        isWinner={winner === "team2"}
        isDone={done}
      />
    </div>
  );
}

export default function BracketView({ matches }) {
  const byRound = {};
  for (const m of Object.values(matches)) {
    if (!byRound[m.round]) byRound[m.round] = [];
    byRound[m.round].push(m);
  }
  for (const r of Object.keys(byRound)) {
    byRound[r].sort((a, b) => a.id - b.id);
  }

  const r32Count = byRound.R32?.length ?? 16;
  const columnHeight = r32Count * CARD_HEIGHT;

  return (
    // Break out of the centered max-w container so the bracket can use most
    // of the browser width (with a comfortable side margin), falling back to
    // horizontal scroll only on screens too narrow to fit every round.
    <div
      className="relative left-1/2 right-1/2 mb-8 overflow-x-auto"
      style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw" }}
    >
      <div className="flex gap-3 mx-auto px-12" style={{ maxWidth: 1500 }}>
        {ROUND_ORDER.filter((r) => byRound[r]).map((round) => (
          <div key={round} className="flex-1 min-w-[150px] flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 text-center truncate">
              {ROUND_TITLES[round]}
            </h3>
            <div style={{ height: columnHeight }} className="flex flex-col justify-around">
              {byRound[round].map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
