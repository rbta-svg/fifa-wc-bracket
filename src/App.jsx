import { useState, useMemo } from "react";
import { useStore } from "./hooks/useStore";
import { resolveBracket } from "./utils/bracket";
import ScoreCard from "./components/ScoreCard";
import BracketView from "./components/BracketView";
import MatchList from "./components/MatchList";
import "./index.css";

const ADMIN_PIN = "1234";

export default function App() {
  const { state, loading, setPrediction, setResult, clearResult, setPen } = useStore();
  const [adminMode, setAdminMode] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [showPinDialog, setShowPinDialog] = useState(false);

  const resolvedMatches = useMemo(
    () => resolveBracket(state.results, state.pens),
    [state.results, state.pens]
  );

  function handleAdminToggle() {
    if (adminMode) {
      setAdminMode(false);
    } else {
      setShowPinDialog(true);
      setPinInput("");
    }
  }

  function handlePinSubmit(e) {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setAdminMode(true);
      setShowPinDialog(false);
    } else {
      setPinInput("");
      alert("Wrong PIN");
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <div>
              <h1 className="text-base font-bold text-white leading-none">FIFA WC 2026</h1>
              <p className="text-xs text-slate-400">Knockout Bracket Challenge</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {loading && <span className="text-xs text-slate-500">Syncing…</span>}
            <button
              onClick={handleAdminToggle}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                adminMode
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                  : "bg-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              {adminMode ? "⚙ Admin ON" : "Admin"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="bg-slate-800/50 rounded-xl px-4 py-3 mb-6 text-xs text-slate-400 flex flex-wrap gap-x-5 gap-y-1">
          <span><span className="text-yellow-400 font-bold">5 pts</span> — Exact score</span>
          <span><span className="text-green-400 font-bold">4 pts</span> — Right winner + goal difference</span>
          <span><span className="text-blue-400 font-bold">3 pts</span> — Right winner</span>
          <span><span className="text-slate-500 font-bold">0 pts</span> — Wrong winner</span>
          <span className="text-amber-500">Draws advance on penalties — pick a shootout winner too.</span>
        </div>

        <ScoreCard predictions={state.predictions} matches={resolvedMatches} />

        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">Bracket</h2>
        <BracketView matches={resolvedMatches} />

        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">Predictions</h2>
        <MatchList
          matches={resolvedMatches}
          predictions={state.predictions}
          onPrediction={setPrediction}
          onResult={setResult}
          onPen={setPen}
          clearResult={clearResult}
          adminMode={adminMode}
        />
      </main>

      {showPinDialog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <form
            onSubmit={handlePinSubmit}
            className="bg-slate-800 rounded-2xl p-6 w-72 shadow-xl border border-slate-700"
          >
            <h3 className="text-white font-bold mb-4">Enter Admin PIN</h3>
            <input
              autoFocus
              type="password"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 text-center text-xl tracking-widest border border-slate-600 focus:outline-none focus:border-blue-500 mb-4"
              placeholder="••••"
            />
            <div className="flex gap-2">
              <button type="button" onClick={() => setShowPinDialog(false)} className="flex-1 py-2 rounded-lg bg-slate-700 text-slate-300 text-sm">
                Cancel
              </button>
              <button type="submit" className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm">
                Unlock
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
