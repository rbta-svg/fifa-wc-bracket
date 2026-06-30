import { useState } from "react";

export default function ScoreInput({ value, onChange, disabled }) {
  const [s1, setS1] = useState(value?.s1 ?? "");
  const [s2, setS2] = useState(value?.s2 ?? "");

  function commit(ns1, ns2) {
    const v1 = parseInt(ns1, 10);
    const v2 = parseInt(ns2, 10);
    if (!isNaN(v1) && !isNaN(v2) && v1 >= 0 && v2 >= 0) {
      onChange({ s1: v1, s2: v2 });
    }
  }

  if (disabled) {
    if (!value) return <span className="text-slate-500 text-sm">—</span>;
    return (
      <span className="font-mono font-bold text-slate-300">
        {value.s1} – {value.s2}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <input
        type="number"
        min={0}
        max={20}
        value={s1}
        disabled={disabled}
        onChange={(e) => { setS1(e.target.value); commit(e.target.value, s2); }}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
      <span className="text-slate-400">–</span>
      <input
        type="number"
        min={0}
        max={20}
        value={s2}
        disabled={disabled}
        onChange={(e) => { setS2(e.target.value); commit(s1, e.target.value); }}
        className="w-10 text-center bg-slate-700 border border-slate-600 rounded text-white text-sm py-0.5 focus:outline-none focus:border-blue-400"
      />
    </div>
  );
}
