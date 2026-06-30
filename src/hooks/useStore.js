import { useState, useEffect } from "react";
import { MATCHES } from "../data/matches";

const STORAGE_KEY = "fwc26_bracket";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function buildInitialState() {
  const predictions = { robert: {}, azi: {} };
  const results = {};
  for (const m of MATCHES) {
    if (m.result) results[m.id] = m.result;
  }
  return { predictions, results };
}

export function useStore() {
  const [state, setState] = useState(() => loadState() || buildInitialState());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  function setPrediction(player, matchId, score) {
    setState((s) => ({
      ...s,
      predictions: {
        ...s.predictions,
        [player]: { ...s.predictions[player], [matchId]: score },
      },
    }));
  }

  function setResult(matchId, score) {
    setState((s) => ({ ...s, results: { ...s.results, [matchId]: score } }));
  }

  function clearResult(matchId) {
    setState((s) => {
      const r = { ...s.results };
      delete r[matchId];
      return { ...s, results: r };
    });
  }

  return { state, setPrediction, setResult, clearResult };
}
