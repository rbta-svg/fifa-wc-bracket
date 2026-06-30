import { MATCHES } from "../data/matches";

// Determines the winning side of a finished match, accounting for penalties.
// Returns "team1" | "team2" | null (not finished yet).
export function getWinnerSide(match) {
  const r = match.result;
  if (!r) return null;
  if (r.s1 !== r.s2) return r.s1 > r.s2 ? "team1" : "team2";
  if (match.pen) return match.pen.s1 > match.pen.s2 ? "team1" : "team2";
  return null; // draw with no penalty info yet
}

// Resolves the full bracket: fills in team1/team2 for matches whose
// participants depend on earlier results (feeders / loserFeeders).
// `results` is a map of matchId -> { s1, s2 } overriding/extending MATCHES results.
// `pens` is a map of matchId -> { s1, s2 } penalty shootout scores.
export function resolveBracket(results = {}, pens = {}) {
  const byId = {};
  for (const m of MATCHES) byId[m.id] = { ...m };

  // Merge live results/pens on top of the static data.
  for (const id of Object.keys(byId)) {
    const numId = Number(id);
    if (results[numId] !== undefined) byId[numId].result = results[numId];
    if (pens[numId] !== undefined) byId[numId].pen = pens[numId];
  }

  const resolved = {};

  function resolveMatch(id) {
    if (resolved[id]) return resolved[id];
    const m = byId[id];
    let team1 = m.team1;
    let team2 = m.team2;

    if (m.feeders) {
      const [aId, bId] = m.feeders;
      team1 = winnerName(aId) ?? `Winner of M${aId}`;
      team2 = winnerName(bId) ?? `Winner of M${bId}`;
    } else if (m.loserFeeders) {
      const [aId, bId] = m.loserFeeders;
      team1 = loserName(aId) ?? `Loser of M${aId}`;
      team2 = loserName(bId) ?? `Loser of M${bId}`;
    }

    resolved[id] = { ...m, team1, team2 };
    return resolved[id];
  }

  function winnerName(id) {
    const side = getWinnerSide(byId[id]);
    if (!side) return null;
    const m = resolveMatch(id);
    return side === "team1" ? m.team1 : m.team2;
  }

  function loserName(id) {
    const side = getWinnerSide(byId[id]);
    if (!side) return null;
    const m = resolveMatch(id);
    return side === "team1" ? m.team2 : m.team1;
  }

  for (const id of Object.keys(byId)) resolveMatch(Number(id));
  return resolved;
}

export function isPlaceholderTeam(name) {
  return !name || name.startsWith("Winner of M") || name.startsWith("Loser of M");
}
