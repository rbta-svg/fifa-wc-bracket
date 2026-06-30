// Scoring rules:
// - Wrong winner: 0 pts
// - Correct winner only (wrong score, wrong goal delta): 3 pts
// - Correct winner + correct goal delta (but not exact score): 3 + 1 = 4 pts
// - Exact score: 5 pts

export function getWinner(s1, s2) {
  if (s1 > s2) return "team1";
  if (s2 > s1) return "team2";
  return "draw";
}

export function calcPoints(prediction, result) {
  if (!prediction || result == null) return null;

  const predWinner = getWinner(prediction.s1, prediction.s2);
  const realWinner = getWinner(result.s1, result.s2);

  if (predWinner !== realWinner) return 0;

  // Exact score
  if (prediction.s1 === result.s1 && prediction.s2 === result.s2) return 5;

  // Correct winner, check goal delta
  const predDelta = prediction.s1 - prediction.s2;
  const realDelta = result.s1 - result.s2;
  if (predDelta === realDelta) return 4; // 3 for winner + 1 for delta

  return 3; // just correct winner
}

export function calcTotalPoints(predictions, matches) {
  let total = 0;
  for (const match of matches) {
    const pred = predictions[match.id];
    const pts = calcPoints(pred, match.result);
    if (pts !== null) total += pts;
  }
  return total;
}

// Returns true if predictions are locked (kickoff ≤ 15 min away)
export function isLocked(kickoffISO) {
  const kickoff = new Date(kickoffISO);
  const now = new Date();
  return now >= new Date(kickoff.getTime() - 15 * 60 * 1000);
}
