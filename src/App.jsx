import { useState } from "react";
import { useStore } from "./hooks/useStore";
import ScoreCard from "./components/ScoreCard";
import MatchList from "./components/MatchList";
import "./index.css";

const ADMIN_PIN = "1234";

export default function App() {
  const { state, setPrediction, setResult, clearResult } = useStore();
  const [filter, setFilter] = useState("all");
  const [adminMode, setAdminMode] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [showPinDialog, setShowPinDialog] = useState(false);

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

  const filterButtons = [
    { key: "all", label: "All" },
    { key: "group", label: "Group Stage" },
    { key: "knockout", label: "Knockout" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <div>
              <h1 className="text-base font-bold text-white leading-none">FIFA WC 2026</h1>
              <p className="text-xs text-slate-400">Bracket Challenge</p>
            </div>
          </div>
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
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Scoring key */}
        <div className="bg-slate-800/50 rounded-xl px-4 py-3 mb-6 text-xs text-slate-400 flex flex-wrap gap-x-5 gap-y-1">
          <span><span className="text-yellow-400 font-bold">5 pts</span> — Exact score</span>
          <span><span className="text-green-400 font-bold">4 pts</span> — Right winner + goal difference</span>
          <span><span className="text-blue-400 font-bold">3 pts</span> — Right winner</span>
          <span><span className="text-slate-500 font-bold">0 pts</span> — Wrong winner</span>
        </div>

        {/* Scoreboard */}
        <ScoreCard predictions={state.predictions} results={state.results} />

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Match list */}
        <MatchList
          predictions={state.predictions}
          results={state.results}
          onPrediction={setPrediction}
          onResult={setResult}
          clearResult={clearResult}
          adminMode={adminMode}
          filter={filter}
        />
      </main>

      {/* Admin PIN dialog */}
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
              <button
                type="button"
                onClick={() => setShowPinDialog(false)}
                className="flex-1 py-2 rounded-lg bg-slate-700 text-slate-300 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm"
              >
                Unlock
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
