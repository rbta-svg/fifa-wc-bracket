import { calcTotalPoints } from "../utils/scoring";

export default function ScoreCard({ predictions, matches }) {
  const robertPts = calcTotalPoints(predictions.robert, matches);
  const aziPts = calcTotalPoints(predictions.azi, matches);

  const leader = robertPts > aziPts ? "Robert" : aziPts > robertPts ? "Azi" : null;

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { name: "Robert", pts: robertPts, color: "from-blue-600 to-blue-400" },
        { name: "Azi", pts: aziPts, color: "from-green-600 to-green-400" },
      ].map(({ name, pts, color }) => (
        <div key={name} className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white relative overflow-hidden`}>
          {leader === name && (
            <span className="absolute top-3 right-3 text-xs bg-white/20 px-2 py-0.5 rounded-full font-semibold">
              🏆 Leading
            </span>
          )}
          <p className="text-lg font-bold opacity-90">{name}</p>
          <p className="text-5xl font-black mt-1">{pts}</p>
          <p className="text-sm opacity-75 mt-1">points</p>
        </div>
      ))}
    </div>
  );
}
