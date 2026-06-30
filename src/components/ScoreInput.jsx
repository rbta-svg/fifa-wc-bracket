import { useState } from "react";

export default function ScoreInput({ value, onChange, disabled, team1, team2 }) {
  const [s1, setS1] = useState(value?.s1 ?? "");
  const [s2, setS2] = useState(value?.s2 ?? "");
  const [penWinner, setPenWinner] = useState(value?.penWinner ?? null);

  function commit(ns1, ns2, nPenWinner) {
    const v1 = parseInt(ns1, 10);
    const v2 = parseInt(ns2, 10);
    if (isNaN(v1) || isNaN(v2) || v1 < 0 || v2 < 0) return;
    const payload = { s1: v1, s2: v2 };
    if (v1 === v2) payload.penWinner = nPenWinner ?? null;
    onChange(payload);
  }

  const isDraw = s1 !== "" && s2 !== "" && Number(s1) === Number(s2);

  if (disabled) {
    if (!value) return <span className="text-slate-500 text-sm">—</span>;
    return (
      <span className="font-mono font-bold text-slate-300 text-sm">
        {value.s1} – {value.s2}
        {value.s1 === value.s2 && value.penWinner && (
          <span className="text-xs text-amber-400 ml-1">
            ({value.penWinner === "team1" ? team1 : team2} on pens)
          </span>
        )}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <input
        type="number"
        min={0}
        max={20}
        value={s1}
        onChange={(e) => { setS1(e.target.value); commit(e.target.value, s2, penWinner); }}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
      <span className="text-slate-400">–</span>
      <input
        type="number"
        min={0}
        max={20}
        value={s2}
        onChange={(e) => { setS2(e.target.value); commit(s1, e.target.value, penWinner); }}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
      {isDraw && (
        <div className="flex items-center gap-1 ml-1">
          <span className="text-xs text-amber-400">pens:</span>
          {[
            { side: "team1", label: team1 },
            { side: "team2", label: team2 },
          ].map(({ side, label }) => (
            <button
              key={side}
              type="button"
              onClick={() => { setPenWinner(side); commit(s1, s2, side); }}
              className={`text-xs px-1.5 py-0.5 rounded ${
                penWinner === side
                  ? "bg-amber-500 text-black font-semibold"
                  : "bg-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
