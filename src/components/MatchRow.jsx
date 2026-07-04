import { calcPoints, isLocked } from "../utils/scoring";
import { isPlaceholderTeam } from "../utils/bracket";
import { getFlag } from "../data/flags";
import { DOUBLE_ELIGIBLE_ROUNDS } from "../data/matches";
import ScoreInput from "./ScoreInput";

const ROME_TZ = "Europe/Rome";

function formatKickoff(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    timeZone: ROME_TZ,
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function matchStatus(kickoffISO, result) {
  const kickoff = new Date(kickoffISO);
  const now = new Date();
  if (result) return "done";
  if (now >= kickoff) return "live";
  return "upcoming";
}

const BASE_COLORS = {
  5: "bg-yellow-500 text-black",
  4: "bg-green-500 text-white",
  3: "bg-blue-500 text-white",
  2: "bg-cyan-600 text-white",
  1: "bg-orange-700 text-white",
  0: "bg-slate-600 text-slate-300",
};

function PointsBadge({ pts, doubled }) {
  if (!pts) return null;
  const { base, bonus, total } = pts;
  const displayed = doubled ? total * 2 : total;
  return (
    <span className="inline-flex items-center gap-1">
      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${BASE_COLORS[base] ?? "bg-slate-600 text-slate-300"}`}>
        {displayed}pt{displayed !== 1 ? "s" : ""}
      </span>
      {bonus > 0 && (
        <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-purple-500 text-white" title="Exact penalty score bonus">
          🎯+{doubled ? bonus * 2 : bonus}
        </span>
      )}
      {doubled && (
        <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-fuchsia-500 text-white">×2</span>
      )}
    </span>
  );
}

function DoubleToggle({ player, match, doubles, doubleLocked, onSetDouble, color }) {
  const currentPick = doubles?.[player]?.[match.round] ?? null;
  const isDoubledHere = currentPick === match.id;
  const roundLocked = doubleLocked?.[player]?.[match.round] ?? false;
  const thisLocked = isLocked(match.kickoff);
  const canToggle = !thisLocked && !roundLocked;

  return (
    <button
      type="button"
      disabled={!canToggle}
      onClick={() => onSetDouble(player, match.round, isDoubledHere ? null : match.id)}
      title={
        isDoubledHere
          ? "This is your 2x pick for the round — click to remove"
          : canToggle
          ? "Double your points for this match (one pick per round)"
          : "Not available — round's double pick is already locked in"
      }
      className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition-colors ${
        isDoubledHere
          ? "bg-fuchsia-500 text-white"
          : canToggle
          ? `bg-slate-700 ${color} hover:text-white`
          : "bg-slate-800 text-slate-600 cursor-not-allowed"
      }`}
    >
      2×
    </button>
  );
}

export default function MatchRow({
  match,
  predictions,
  onPrediction,
  onResult,
  onPen,
  clearResult,
  adminMode,
  doubles,
  doubleLocked,
  onSetDouble,
}) {
  const locked = isLocked(match.kickoff);
  const status = matchStatus(match.kickoff, match.result);
  const isTBD = isPlaceholderTeam(match.team1) || isPlaceholderTeam(match.team2);
  const result = match.result;
  const eligibleForDouble = DOUBLE_ELIGIBLE_ROUNDS.includes(match.round);

  const robertPred = predictions.robert[match.id];
  const aziPred = predictions.azi[match.id];
  const robertPts = calcPoints(robertPred, match);
  const aziPts = calcPoints(aziPred, match);
  const robertDoubled = doubles?.robert?.[match.round] === match.id;
  const aziDoubled = doubles?.azi?.[match.round] === match.id;

  const statusDot = {
    done: "bg-slate-500",
    live: "bg-green-400 animate-pulse",
    upcoming: "bg-blue-400",
  }[status];

  const needsUpdate = status === "live";

  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] gap-3 items-start py-3 px-3 rounded-xl mb-2 ${
        status === "done" ? "bg-slate-800/40" : "bg-slate-800/70"
      } ${needsUpdate ? "border border-amber-500/60" : ""}`}
    >
      {/* Left: kickoff */}
      <div className="text-right min-w-[90px]">
        <div className="flex items-center gap-1.5 justify-end">
          <span className={`inline-block w-2 h-2 rounded-full ${statusDot}`} />
          <span className="text-xs text-slate-400">{formatKickoff(match.kickoff)}</span>
        </div>
      </div>

      {/* Center: teams + predictions + result */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold ${isTBD ? "text-slate-500 italic text-sm" : "text-white"}`}>
            {!isTBD && <span className="mr-1">{getFlag(match.team1)}</span>}
            {match.team1}
          </span>
          <span className="text-slate-500">vs</span>
          <span className={`font-semibold ${isTBD ? "text-slate-500 italic text-sm" : "text-white"}`}>
            {!isTBD && <span className="mr-1">{getFlag(match.team2)}</span>}
            {match.team2}
          </span>
          {result && (
            <span className="ml-2 font-mono font-bold text-green-300 text-sm">
              {result.s1} – {result.s2}
              {match.pen && (
                <span className="text-slate-400 text-xs ml-1">
                  ({match.pen.s1}–{match.pen.s2} pens)
                </span>
              )}
            </span>
          )}
        </div>

        {!isTBD && (
          <div className="flex flex-wrap gap-3 mt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-blue-400 font-semibold w-14">Robert</span>
              <ScoreInput
                value={robertPred}
                disabled={locked && !adminMode}
                team1={match.team1}
                team2={match.team2}
                onChange={(v) => onPrediction("robert", match.id, v)}
              />
              {result && <PointsBadge pts={robertPts} doubled={robertDoubled} />}
              {eligibleForDouble && (
                <DoubleToggle
                  player="robert"
                  match={match}
                  doubles={doubles}
                  doubleLocked={doubleLocked}
                  onSetDouble={onSetDouble}
                  color="text-blue-400"
                />
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-green-400 font-semibold w-6">Azi</span>
              <ScoreInput
                value={aziPred}
                disabled={locked && !adminMode}
                team1={match.team1}
                team2={match.team2}
                onChange={(v) => onPrediction("azi", match.id, v)}
              />
              {result && <PointsBadge pts={aziPts} doubled={aziDoubled} />}
              {eligibleForDouble && (
                <DoubleToggle
                  player="azi"
                  match={match}
                  doubles={doubles}
                  doubleLocked={doubleLocked}
                  onSetDouble={onSetDouble}
                  color="text-green-400"
                />
              )}
            </div>
          </div>
        )}

        {adminMode && !isTBD && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-orange-400 font-semibold w-14">Result</span>
            <ScoreInput
              value={result}
              disabled={false}
              resultMode
              team1={match.team1}
              team2={match.team2}
              onChange={(v) => {
                onResult(match.id, { s1: v.s1, s2: v.s2 });
                if (v.s1 === v.s2) {
                  if (v.penScore) {
                    // Admin entered the real, exact shootout score.
                    onPen(match.id, v.penScore);
                  } else if (v.penWinner) {
                    // Fallback: only a winner side given, store a placeholder
                    // score just to record who advances (no exact-score bonus
                    // can be computed against this).
                    onPen(match.id, v.penWinner === "team1" ? { s1: 1, s2: 0 } : { s1: 0, s2: 1 });
                  }
                }
              }}
            />
            {result && (
              <button onClick={() => clearResult(match.id)} className="text-xs text-red-400 hover:text-red-300 underline">
                clear
              </button>
            )}
          </div>
        )}

        {needsUpdate && !isTBD && (
          <p className="text-xs text-amber-400 font-semibold">⚠️ Kickoff has passed — needs a result</p>
        )}
        {locked && !needsUpdate && !result && !isTBD && <p className="text-xs text-amber-500">🔒 Predictions locked</p>}
      </div>

      <div className="text-xs text-slate-500 text-right hidden sm:block max-w-[160px]">{match.venue}</div>
    </div>
  );
}
