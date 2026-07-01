import { useState, useEffect } from "react";
import { doc, onSnapshot, getDoc, setDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import { MATCHES } from "../data/matches";

const docRef = doc(db, "bracket", "shared");

// Seeded predictions provided by the players for the Round of 32.
const DEFAULT_PREDICTIONS = {
  robert: {
    73: { s1: 1, s2: 0 }, // Canada 1-0 South Africa
    74: { s1: 2, s2: 1 }, // Germany 2-1 Paraguay
    75: { s1: 1, s2: 0 }, // Netherlands 1-0 Morocco
    76: { s1: 3, s2: 0 }, // Brazil 3-0 Japan
    77: { s1: 3, s2: 1 }, // France 3-1 Sweden
    78: { s1: 2, s2: 3 }, // Ivory Coast 2-3 Norway
    79: { s1: 1, s2: 1, penWinner: "team1" }, // Mexico 1-1 Ecuador, Mexico on pens
    80: { s1: 2, s2: 0 }, // England 2-0 DR Congo
    81: { s1: 3, s2: 1 }, // USA 3-1 Bosnia-Herzegovina
    82: { s1: 1, s2: 2 }, // Belgium 1-2 Senegal
    83: { s1: 2, s2: 1 }, // Portugal 2-1 Croatia
    84: { s1: 3, s2: 0 }, // Spain 3-0 Austria
    85: { s1: 2, s2: 0 }, // Switzerland 2-0 Algeria
    86: { s1: 3, s2: 0 }, // Argentina 3-0 Cape Verde
    87: { s1: 1, s2: 0 }, // Colombia 1-0 Ghana
    88: { s1: 0, s2: 1 }, // Australia 0-1 Egypt
  },
  azi: {
    73: { s1: 1, s2: 0 }, // Canada 1-0 South Africa
    74: { s1: 4, s2: 1 }, // Germany 4-1 Paraguay
    75: { s1: 1, s2: 1, penWinner: "team2" }, // Netherlands 1-1 Morocco, Morocco on pens
    76: { s1: 3, s2: 1 }, // Brazil 3-1 Japan
    77: { s1: 2, s2: 0 }, // France 2-0 Sweden
    78: { s1: 1, s2: 2 }, // Ivory Coast 1-2 Norway
    79: { s1: 0, s2: 0, penWinner: "team2" }, // Mexico 0-0 Ecuador, Ecuador on pens
    80: { s1: 1, s2: 0 }, // England 1-0 DR Congo
    81: { s1: 1, s2: 0 }, // USA 1-0 Bosnia-Herzegovina
    82: { s1: 1, s2: 2 }, // Belgium 1-2 Senegal
    83: { s1: 1, s2: 1, penWinner: "team1" }, // Portugal 1-1 Croatia, Portugal on pens
    84: { s1: 3, s2: 1 }, // Spain 3-1 Austria
    85: { s1: 3, s2: 0 }, // Switzerland 3-0 Algeria
    86: { s1: 4, s2: 0 }, // Argentina 4-0 Cape Verde
    87: { s1: 2, s2: 1 }, // Colombia 2-1 Ghana
    88: { s1: 1, s2: 2 }, // Australia 1-2 Egypt
  },
};

function buildDefaultState() {
  const results = {};
  const pens = {};
  for (const m of MATCHES) {
    if (m.result) results[m.id] = m.result;
    if (m.pen) pens[m.id] = m.pen;
  }
  return { predictions: DEFAULT_PREDICTIONS, results, pens };
}

// Shared state lives in a single Firestore document so Robert and Azi see
// each other's predictions/results in real time, regardless of device.
export function useStore() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    (async () => {
      const snap = await getDoc(docRef);
      if (!snap.exists()) {
        await setDoc(docRef, buildDefaultState());
      }
      unsubscribe = onSnapshot(docRef, (s) => {
        if (s.exists()) {
          setState(s.data());
          setLoading(false);
        }
      });
    })();
    return () => unsubscribe && unsubscribe();
  }, []);

  function setPrediction(player, matchId, score) {
    updateDoc(docRef, { [`predictions.${player}.${matchId}`]: score });
  }

  function setResult(matchId, score) {
    updateDoc(docRef, { [`results.${matchId}`]: score });
  }

  function clearResult(matchId) {
    updateDoc(docRef, {
      [`results.${matchId}`]: deleteField(),
      [`pens.${matchId}`]: deleteField(),
    });
  }

  function setPen(matchId, score) {
    updateDoc(docRef, { [`pens.${matchId}`]: score });
  }

  return {
    state: state ?? buildDefaultState(),
    loading,
    setPrediction,
    setResult,
    clearResult,
    setPen,
  };
}
