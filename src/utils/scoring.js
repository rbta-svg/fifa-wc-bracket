import { getWinnerSide } from "./bracket";

// ── Regulation-decisive matches (no draw after 90 min) ──
// - Wrong winner: 0 pts
// - Correct winner only: 3 pts
// - Correct winner + correct goal difference (not exact): 4 pts
// - Exact score: 5 pts
//
// ── Matches decided on penalties (90-min draw) ──
// Predicting a draw correctly is genuine skill; guessing who wins a shootout
// is close to a coin flip. So these are scored on a separate table that
// rewards "did you call the draw" far more than "did you call the shootout":
//   exact 90-min draw score + correct shootout winner  -> 5
//   exact 90-min draw score, shootout winner wrong/none -> 4
//   drew tendency right (wrong score) + correct shootout winner -> 3
//   drew tendency right (wrong score), shootout winner wrong/none -> 2
//   predicted a decisive winner who happens to win the shootout -> 1
//   predicted a decisive winner who loses the shootout -> 0
//
// ── Exact-penalty-score bonus (+10) ──
// Independent, additive on top of the table above. Only relevant if the
// player predicted a draw. If they also filled in an exact guess for the
// penalty shootout score (prediction.penScore) and it matches the real
// shootout score exactly, +10 flat points, regardless of everything else.

function predictionWinnerSide(prediction) {
  if (prediction.s1 !== prediction.s2) {
    return prediction.s1 > prediction.s2 ? "team1" : "team2";
  }
  // Legacy predictions stored just a `penWinner` side (no exact score guess).
  return prediction.penWinner ?? null;
}

// Returns { base, bonus, total } or null if not yet scoreable.
export function calcPoints(prediction, match) {
  if (!prediction || !match || !match.result) return null;

  const { result } = match;
  const isDraw90 = result.s1 === result.s2;
  const predIsDraw = prediction.s1 === prediction.s2;

  let base;

  if (!isDraw90) {
    // Regulation-decisive match: unchanged rules.
    const realWinner = result.s1 > result.s2 ? "team1" : "team2";
    const predWinner = predictionWinnerSide(prediction);
    if (predWinner !== realWinner) {
      base = 0;
    } else if (prediction.s1 === result.s1 && prediction.s2 === result.s2) {
      base = 5;
    } else {
      const predDelta = prediction.s1 - prediction.s2;
      const realDelta = result.s1 - result.s2;
      base = predDelta === realDelta ? 4 : 3;
    }
  } else {
    // Regulation draw, decided by penalties.
    if (!match.pen) return null; // shootout not recorded yet
    const realPenWinner = match.pen.s1 > match.pen.s2 ? "team1" : "team2";

    if (!predIsDraw) {
      const predWinner = prediction.s1 > prediction.s2 ? "team1" : "team2";
      base = predWinner === realPenWinner ? 1 : 0;
    } else {
      const predShootoutWinner = predictionWinnerSide(prediction);
      const correctShootout = predShootoutWinner === realPenWinner;
      const exactRegScore = prediction.s1 === result.s1 && prediction.s2 === result.s2;
      if (exactRegScore) {
        base = correctShootout ? 5 : 4;
      } else {
        base = correctShootout ? 3 : 2;
      }
    }
  }

  let bonus = 0;
  if (predIsDraw && match.pen && prediction.penScore) {
    const { s1: p1, s2: p2 } = prediction.penScore;
    if (p1 === match.pen.s1 && p2 === match.pen.s2) bonus = 10;
  }

  return { base, bonus, total: base + bonus };
}

// `doubledMatchIds` is a Set of match ids this player has doubled (one per
// eligible round at most, enforced elsewhere) — their points for those
// matches count twice.
export function calcTotalPoints(predictions, resolvedMatches, doubledMatchIds = new Set()) {
  let total = 0;
  for (const match of Object.values(resolvedMatches)) {
    const pts = calcPoints(predictions[match.id], match);
    if (pts === null) continue;
    total += doubledMatchIds.has(match.id) ? pts.total * 2 : pts.total;
  }
  return total;
}

// Returns true if predictions are locked (kickoff <= 15 min away)
export function isLocked(kickoffISO) {
  const kickoff = new Date(kickoffISO);
  const now = new Date();
  return now >= new Date(kickoff.getTime() - 15 * 60 * 1000);
}
