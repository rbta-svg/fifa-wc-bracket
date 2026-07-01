// Knockout stage only. All times in UTC ISO format. Display in Europe/Rome.
// `feeders: [idA, idB]` means team1 = winner of idA, team2 = winner of idB (used once team1/team2 are null).
// `loserFeeders: [idA, idB]` means team1 = loser of idA, team2 = loser of idB.

export const MATCHES = [
  // ── ROUND OF 32 ──
  { id: 73, round: "R32", kickoff: "2026-06-28T19:00:00Z", team1: "Canada",      team2: "South Africa", venue: "SoFi Stadium, Inglewood",              result: { s1: 1, s2: 0 } },
  { id: 74, round: "R32", kickoff: "2026-06-29T17:00:00Z", team1: "Germany",     team2: "Paraguay",      venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 1 }, pen: { s1: 3, s2: 4 } },
  { id: 76, round: "R32", kickoff: "2026-06-29T21:00:00Z", team1: "Brazil",      team2: "Japan",         venue: "NRG Stadium, Houston",                  result: { s1: 2, s2: 1 } },
  { id: 75, round: "R32", kickoff: "2026-06-29T23:00:00Z", team1: "Netherlands", team2: "Morocco",       venue: "Estadio BBVA, Monterrey",               result: { s1: 1, s2: 1 }, pen: { s1: 2, s2: 3 } },
  { id: 78, round: "R32", kickoff: "2026-06-30T17:00:00Z", team1: "Ivory Coast", team2: "Norway",        venue: "AT&T Stadium, Arlington",               result: null },
  { id: 77, round: "R32", kickoff: "2026-06-30T21:00:00Z", team1: "France",      team2: "Sweden",        venue: "MetLife Stadium, East Rutherford",      result: null },
  { id: 79, round: "R32", kickoff: "2026-07-01T01:00:00Z", team1: "Mexico",      team2: "Ecuador",       venue: "Estadio Azteca, Mexico City",           result: null },
  { id: 80, round: "R32", kickoff: "2026-07-01T16:00:00Z", team1: "England",     team2: "DR Congo",      venue: "Mercedes-Benz Stadium, Atlanta",        result: null },
  { id: 82, round: "R32", kickoff: "2026-07-01T20:00:00Z", team1: "Belgium",     team2: "Senegal",       venue: "Lumen Field, Seattle",                  result: null },
  { id: 81, round: "R32", kickoff: "2026-07-02T00:00:00Z", team1: "USA",         team2: "Bosnia-Herzegovina", venue: "Levi's Stadium, Santa Clara",     result: null },
  { id: 84, round: "R32", kickoff: "2026-07-02T19:00:00Z", team1: "Spain",       team2: "Austria",       venue: "SoFi Stadium, Inglewood",               result: null },
  { id: 83, round: "R32", kickoff: "2026-07-02T23:00:00Z", team1: "Portugal",    team2: "Croatia",       venue: "BMO Field, Toronto",                    result: null },
  { id: 85, round: "R32", kickoff: "2026-07-03T03:00:00Z", team1: "Switzerland", team2: "Algeria",       venue: "BC Place, Vancouver",                   result: null },
  { id: 88, round: "R32", kickoff: "2026-07-03T18:00:00Z", team1: "Australia",   team2: "Egypt",         venue: "AT&T Stadium, Arlington",               result: null },
  { id: 86, round: "R32", kickoff: "2026-07-03T22:00:00Z", team1: "Argentina",   team2: "Cape Verde",    venue: "Hard Rock Stadium, Miami Gardens",      result: null },
  { id: 87, round: "R32", kickoff: "2026-07-04T01:30:00Z", team1: "Colombia",    team2: "Ghana",         venue: "Arrowhead Stadium, Kansas City",         result: null },

  // ── ROUND OF 16 ── (team1/2 resolved from R32 winners; pairings verified against official bracket)
  { id: 89, round: "R16", kickoff: "2026-07-04T17:00:00Z", team1: null, team2: null, feeders: [73, 75], venue: "NRG Stadium, Houston",                  result: null }, // Canada vs Morocco
  { id: 90, round: "R16", kickoff: "2026-07-04T21:00:00Z", team1: null, team2: null, feeders: [74, 77], venue: "Lincoln Financial Field, Philadelphia",  result: null }, // Paraguay vs France
  { id: 91, round: "R16", kickoff: "2026-07-05T20:00:00Z", team1: null, team2: null, feeders: [76, 78], venue: "MetLife Stadium, East Rutherford",      result: null }, // Brazil vs Norway
  { id: 92, round: "R16", kickoff: "2026-07-06T00:00:00Z", team1: null, team2: null, feeders: [79, 80], venue: "Estadio Azteca, Mexico City",           result: null }, // Mexico vs England/DR Congo
  { id: 93, round: "R16", kickoff: "2026-07-06T19:00:00Z", team1: null, team2: null, feeders: [83, 84], venue: "AT&T Stadium, Arlington",               result: null }, // Portugal/Croatia vs Spain/Austria
  { id: 94, round: "R16", kickoff: "2026-07-07T00:00:00Z", team1: null, team2: null, feeders: [81, 82], venue: "Lumen Field, Seattle",                  result: null }, // USA/Bosnia vs Belgium/Senegal
  { id: 95, round: "R16", kickoff: "2026-07-07T16:00:00Z", team1: null, team2: null, feeders: [86, 88], venue: "Mercedes-Benz Stadium, Atlanta",        result: null }, // Argentina/Cape Verde vs Australia/Egypt
  { id: 96, round: "R16", kickoff: "2026-07-07T20:00:00Z", team1: null, team2: null, feeders: [85, 87], venue: "BC Place, Vancouver",                   result: null }, // Switzerland/Algeria vs Colombia/Ghana

  // ── QUARTERFINALS ──
  { id: 97,  round: "QF", kickoff: "2026-07-09T20:00:00Z", team1: null, team2: null, feeders: [89, 90], venue: "Gillette Stadium, Foxborough", result: null },
  { id: 98,  round: "QF", kickoff: "2026-07-10T19:00:00Z", team1: null, team2: null, feeders: [93, 94], venue: "SoFi Stadium, Inglewood",     result: null },
  { id: 99,  round: "QF", kickoff: "2026-07-11T21:00:00Z", team1: null, team2: null, feeders: [91, 92], venue: "Hard Rock Stadium, Miami Gardens", result: null },
  { id: 100, round: "QF", kickoff: "2026-07-12T01:00:00Z", team1: null, team2: null, feeders: [95, 96], venue: "Arrowhead Stadium, Kansas City", result: null },

  // ── SEMIFINALS ──
  { id: 101, round: "SF", kickoff: "2026-07-14T19:00:00Z", team1: null, team2: null, feeders: [97, 98], venue: "AT&T Stadium, Arlington", result: null },
  { id: 102, round: "SF", kickoff: "2026-07-15T19:00:00Z", team1: null, team2: null, feeders: [99, 100], venue: "Mercedes-Benz Stadium, Atlanta", result: null },

  // ── THIRD PLACE ──
  { id: 103, round: "3P", kickoff: "2026-07-18T21:00:00Z", team1: null, team2: null, loserFeeders: [101, 102], venue: "Hard Rock Stadium, Miami Gardens", result: null },

  // ── FINAL ──
  { id: 104, round: "FINAL", kickoff: "2026-07-19T19:00:00Z", team1: null, team2: null, feeders: [101, 102], venue: "MetLife Stadium, East Rutherford", result: null },
];

export const ROUND_LABELS = {
  R32: "Round of 32",
  R16: "Round of 16",
  QF: "Quarter-finals",
  SF: "Semi-finals",
  "3P": "Third Place",
  FINAL: "Final",
};

export const ROUND_ORDER = ["R32", "R16", "QF", "SF", "3P", "FINAL"];
