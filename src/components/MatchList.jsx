import { ROUND_ORDER, ROUND_LABELS } from "../data/matches";
import MatchRow from "./MatchRow";

export default function MatchList({ matches, predictions, onPrediction, onResult, onPen, clearResult, adminMode }) {
  const grouped = {};
  for (const m of Object.values(matches)) {
    if (!grouped[m.round]) grouped[m.round] = [];
    grouped[m.round].push(m);
  }
  for (const round of Object.keys(grouped)) {
    grouped[round].sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff));
  }

  const rounds = ROUND_ORDER.filter((r) => grouped[r]);

  return (
    <div>
      {rounds.map((round) => (
        <section key={round} className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
            {ROUND_LABELS[round]}
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
            />
          ))}
        </section>
      ))}
    </div>
  );
}
