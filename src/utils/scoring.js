import { getWinnerSide } from "./bracket";

// Scoring rules:
// - Wrong winner: 0 pts
// - Correct winner only: 3 pts
// - Correct winner + correct goal difference (but not exact score): 3 + 1 = 4 pts
// - Exact score (incl. matching penalty-shootout pick if it went to pens): 5 pts
//
// Since this is a knockout stage, a drawn regulation score always advances on
// penalties. A prediction of a draw must include a `penWinner` ("team1" | "team2")
// to indicate who the player thinks wins the shootout — that's compared against
// the real winner.

function predictionWinnerSide(prediction) {
  if (prediction.s1 !== prediction.s2) {
    return prediction.s1 > prediction.s2 ? "team1" : "team2";
  }
  return prediction.penWinner ?? null;
}

export function calcPoints(prediction, match) {
  if (!prediction || !match || !match.result) return null;

  const realWinner = getWinnerSide(match);
  if (!realWinner) return null; // draw, no penalty result recorded yet

  const predWinner = predictionWinnerSide(prediction);
  if (predWinner !== realWinner) return 0;

  const { result } = match;
  if (prediction.s1 === result.s1 && prediction.s2 === result.s2) return 5;

  // Goal-difference bonus only applies when the score wasn't actually a draw,
  // since a drawn prediction with the right score would already be 5 above.
  const predDelta = prediction.s1 - prediction.s2;
  const realDelta = result.s1 - result.s2;
  if (realDelta !== 0 && predDelta === realDelta) return 4;

  return 3;
}

export function calcTotalPoints(predictions, resolvedMatches) {
  let total = 0;
  for (const match of Object.values(resolvedMatches)) {
    const pts = calcPoints(predictions[match.id], match);
    if (pts !== null) total += pts;
  }
  return total;
}

// Returns true if predictions are locked (kickoff <= 15 min away)
export function isLocked(kickoffISO) {
  const kickoff = new Date(kickoffISO);
  const now = new Date();
  return now >= new Date(kickoff.getTime() - 15 * 60 * 1000);
}
