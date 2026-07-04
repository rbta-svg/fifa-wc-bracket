import { ROUND_ORDER, ROUND_LABELS, DOUBLE_ELIGIBLE_ROUNDS } from "../data/matches";
import { isLocked } from "../utils/scoring";
import MatchRow from "./MatchRow";

function computeDoubleLocked(matches, doubles) {
  const result = { robert: {}, azi: {} };
  for (const player of ["robert", "azi"]) {
    for (const round of DOUBLE_ELIGIBLE_ROUNDS) {
      const pickedId = doubles?.[player]?.[round];
      const pickedMatch = pickedId != null ? matches[pickedId] : null;
      result[player][round] = pickedMatch ? isLocked(pickedMatch.kickoff) : false;
    }
  }
  return result;
}

export default function MatchList({
  matches,
  predictions,
  onPrediction,
  onResult,
  onPen,
  clearResult,
  adminMode,
  doubles,
  onSetDouble,
}) {
  const grouped = {};
  for (const m of Object.values(matches)) {
    if (!grouped[m.round]) grouped[m.round] = [];
    grouped[m.round].push(m);
  }
  for (const round of Object.keys(grouped)) {
    grouped[round].sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff));
  }

  const rounds = ROUND_ORDER.filter((r) => grouped[r]);
  const doubleLocked = computeDoubleLocked(matches, doubles);

  return (
    <div>
      {rounds.map((round) => (
        <section key={round} className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
            {ROUND_LABELS[round]}
            {DOUBLE_ELIGIBLE_ROUNDS.includes(round) && (
              <span className="ml-2 text-[10px] normal-case font-normal text-fuchsia-400">
                — pick one match to 2× per player
              </span>
            )}
          </h2>
          {grouped[round].map((match) => (
            <MatchRow
              key={match.id}
              match={match}
              predictions={predictions}
              onPrediction={onPrediction}
              onResult={onResult}
              onPen={onPen}
              clearResult={clearResult}
              adminMode={adminMode}
              doubles={doubles}
              doubleLocked={doubleLocked}
              onSetDouble={onSetDouble}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
