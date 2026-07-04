import { useState, useEffect, useRef } from "react";

export default function ScoreInput({ value, onChange, disabled, team1, team2, resultMode = false }) {
  const [s1, setS1] = useState(value?.s1 ?? "");
  const [s2, setS2] = useState(value?.s2 ?? "");
  const [penWinner, setPenWinner] = useState(value?.penWinner ?? null);
  const [bonusP1, setBonusP1] = useState(value?.penScore?.s1 ?? "");
  const [bonusP2, setBonusP2] = useState(value?.penScore?.s2 ?? "");
  const focusedRef = useRef(false);

  // Firestore's initial fetch is async: this component can mount before the
  // real saved value arrives (e.g. right after page load), locking in a stale
  // "" from the useState initializer above. Resync whenever a fresh value
  // comes in from the backend, unless the user is actively typing right now.
  useEffect(() => {
    if (focusedRef.current) return;
    setS1(value?.s1 ?? "");
    setS2(value?.s2 ?? "");
    setPenWinner(value?.penWinner ?? null);
    setBonusP1(value?.penScore?.s1 ?? "");
    setBonusP2(value?.penScore?.s2 ?? "");
  }, [value?.s1, value?.s2, value?.penWinner, value?.penScore?.s1, value?.penScore?.s2]);

  function commit(ns1, ns2, nPenWinner, nBonusP1, nBonusP2) {
    const v1 = parseInt(ns1, 10);
    const v2 = parseInt(ns2, 10);
    if (isNaN(v1) || isNaN(v2) || v1 < 0 || v2 < 0) return;
    const payload = { s1: v1, s2: v2 };
    if (v1 === v2) {
      payload.penWinner = nPenWinner ?? null;
      const bp1 = parseInt(nBonusP1, 10);
      const bp2 = parseInt(nBonusP2, 10);
      if (!isNaN(bp1) && !isNaN(bp2) && bp1 >= 0 && bp2 >= 0 && bp1 !== bp2) {
        payload.penScore = { s1: bp1, s2: bp2 };
      }
    }
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
        {value.s1 === value.s2 && value.penScore && (
          <span className="text-xs text-purple-400 ml-1">
            [pens guess: {value.penScore.s1}-{value.penScore.s2}]
          </span>
        )}
      </span>
    );
  }

  const focusHandlers = {
    onFocus: () => { focusedRef.current = true; },
    onBlur: () => { focusedRef.current = false; },
  };

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <input
        type="number"
        min={0}
        max={20}
        value={s1}
        onChange={(e) => { setS1(e.target.value); commit(e.target.value, s2, penWinner, bonusP1, bonusP2); }}
        {...focusHandlers}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
      <span className="text-slate-400">–</span>
      <input
        type="number"
        min={0}
        max={20}
        value={s2}
        onChange={(e) => { setS2(e.target.value); commit(s1, e.target.value, penWinner, bonusP1, bonusP2); }}
        {...focusHandlers}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
      {isDraw && (
        <>
          <div className="flex items-center gap-1 ml-1">
            <span className="text-xs text-amber-400">pens:</span>
            {[
              { side: "team1", label: team1 },
              { side: "team2", label: team2 },
            ].map(({ side, label }) => (
              <button
                key={side}
                type="button"
                onClick={() => { setPenWinner(side); commit(s1, s2, side, bonusP1, bonusP2); }}
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
          <div className="flex items-center gap-1 ml-1">
            <span
              className="text-xs text-purple-400"
              title={
                resultMode
                  ? "Enter the real shootout score, so guesses can be checked against it"
                  : "Guess the exact penalty shootout score for a +10 bonus"
              }
            >
              {resultMode ? "exact pens score:" : "🎯 exact pens (+10):"}
            </span>
            <input
              type="number"
              min={0}
              max={20}
              value={bonusP1}
              onChange={(e) => { setBonusP1(e.target.value); commit(s1, s2, penWinner, e.target.value, bonusP2); }}
              {...focusHandlers}
              className="w-8 text-center bg-slate-700 border border-purple-500/40 rounded text-white text-xs py-0.5 focus:outline-none focus:border-purple-400"
            />
            <span className="text-slate-400">–</span>
            <input
              type="number"
              min={0}
              max={20}
              value={bonusP2}
              onChange={(e) => { setBonusP2(e.target.value); commit(s1, s2, penWinner, bonusP1, e.target.value); }}
              {...focusHandlers}
              className="w-8 text-center bg-slate-700 border border-purple-500/40 rounded text-white text-xs py-0.5 focus:outline-none focus:border-purple-400"
            />
          </div>
        </>
      )}
    </div>
  );
}
