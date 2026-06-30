import { MATCHES, GROUP_LABELS } from "../data/matches";
import MatchRow from "./MatchRow";

const ROUND_ORDER = ["A","B","C","D","E","F","G","H","I","J","K","L","R32","R16","QF","SF","3P","F"];

export default function MatchList({ predictions, results, onPrediction, onResult, clearResult, adminMode, filter }) {
  // Group matches by round
  const grouped = {};
  for (const m of MATCHES) {
    if (!grouped[m.group]) grouped[m.group] = [];
    grouped[m.group].push(m);
  }

  const rounds = ROUND_ORDER.filter((r) => grouped[r]);

  // Filter logic
  function shouldShow(round) {
    if (filter === "all") return true;
    if (filter === "group") return "ABCDEFGHIJKL".includes(round);
    if (filter === "knockout") return ["R32","R16","QF","SF","3P","F"].includes(round);
    return true;
  }

  return (
    <div>
      {rounds.filter(shouldShow).map((round) => (
        <section key={round} className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
            {GROUP_LABELS[round]}
          </h2>
          {grouped[round].map((match) => (
            <MatchRow
              key={match.id}
              match={match}
              predictions={predictions}
              result={results[match.id] ?? null}
              onPrediction={onPrediction}
              onResult={onResult}
              clearResult={clearResult}
              adminMode={adminMode}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
