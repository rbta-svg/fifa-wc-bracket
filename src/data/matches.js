// All times in UTC ISO format. Display in Europe/Rome (CEST = UTC+2).
// Results from known played matches (as of June 30, 2026).

export const MATCHES = [
  // ── GROUP STAGE ──
  // Group A
  { id: 1,  kickoff: "2026-06-11T19:00:00Z", team1: "Mexico",        team2: "South Africa",        group: "A", venue: "Estadio Azteca, Mexico City",           result: { s1: 2, s2: 0 } },
  { id: 2,  kickoff: "2026-06-12T02:00:00Z", team1: "South Korea",   team2: "Czechia",              group: "A", venue: "Estadio Akron, Zapopan",                result: { s1: 2, s2: 1 } },
  { id: 25, kickoff: "2026-06-18T16:00:00Z", team1: "Czechia",       team2: "South Africa",         group: "A", venue: "Mercedes-Benz Stadium, Atlanta",        result: { s1: 1, s2: 1 } },
  { id: 28, kickoff: "2026-06-19T01:00:00Z", team1: "Mexico",        team2: "South Korea",          group: "A", venue: "Estadio Akron, Zapopan",                result: { s1: 1, s2: 0 } },
  { id: 53, kickoff: "2026-06-25T01:00:00Z", team1: "South Africa",  team2: "South Korea",          group: "A", venue: "Estadio BBVA, Monterrey",               result: { s1: 1, s2: 0 } },
  { id: 54, kickoff: "2026-06-25T01:00:00Z", team1: "Czechia",       team2: "Mexico",               group: "A", venue: "Estadio Azteca, Mexico City",           result: { s1: 0, s2: 3 } },

  // Group B
  { id: 3,  kickoff: "2026-06-12T19:00:00Z", team1: "Canada",        team2: "Bosnia-Herzegovina",   group: "B", venue: "BMO Field, Toronto",                    result: { s1: 1, s2: 1 } },
  { id: 5,  kickoff: "2026-06-13T19:00:00Z", team1: "Qatar",         team2: "Switzerland",          group: "B", venue: "Levi's Stadium, Santa Clara",           result: { s1: 1, s2: 1 } },
  { id: 26, kickoff: "2026-06-18T19:00:00Z", team1: "Switzerland",   team2: "Bosnia-Herzegovina",   group: "B", venue: "SoFi Stadium, Inglewood",               result: { s1: 4, s2: 1 } },
  { id: 27, kickoff: "2026-06-18T22:00:00Z", team1: "Canada",        team2: "Qatar",                group: "B", venue: "BC Place, Vancouver",                   result: { s1: 6, s2: 0 } },
  { id: 49, kickoff: "2026-06-24T19:00:00Z", team1: "Switzerland",   team2: "Canada",               group: "B", venue: "BC Place, Vancouver",                   result: { s1: 2, s2: 1 } },
  { id: 50, kickoff: "2026-06-24T19:00:00Z", team1: "Bosnia-Herzegovina", team2: "Qatar",           group: "B", venue: "Lumen Field, Seattle",                  result: { s1: 1, s2: 3 } },

  // Group C
  { id: 6,  kickoff: "2026-06-13T22:00:00Z", team1: "Brazil",        team2: "Morocco",              group: "C", venue: "MetLife Stadium, East Rutherford",      result: { s1: 1, s2: 1 } },
  { id: 7,  kickoff: "2026-06-14T01:00:00Z", team1: "Haiti",         team2: "Scotland",             group: "C", venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 1 } },
  { id: 30, kickoff: "2026-06-19T22:00:00Z", team1: "Morocco",       team2: "Scotland",             group: "C", venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 1 } },
  { id: 31, kickoff: "2026-06-20T00:30:00Z", team1: "Brazil",        team2: "Haiti",                group: "C", venue: "Lincoln Financial Field, Philadelphia",  result: { s1: 3, s2: 0 } },
  { id: 51, kickoff: "2026-06-24T22:00:00Z", team1: "Morocco",       team2: "Haiti",                group: "C", venue: "Mercedes-Benz Stadium, Atlanta",        result: { s1: 4, s2: 2 } },
  { id: 52, kickoff: "2026-06-24T22:00:00Z", team1: "Scotland",      team2: "Brazil",               group: "C", venue: "Hard Rock Stadium, Miami Gardens",      result: { s1: 0, s2: 3 } },

  // Group D
  { id: 4,  kickoff: "2026-06-13T01:00:00Z", team1: "USA",           team2: "Paraguay",             group: "D", venue: "SoFi Stadium, Inglewood",               result: { s1: 4, s2: 1 } },
  { id: 8,  kickoff: "2026-06-14T04:00:00Z", team1: "Australia",     team2: "Türkiye",              group: "D", venue: "BC Place, Vancouver",                   result: { s1: 2, s2: 0 } },
  { id: 29, kickoff: "2026-06-19T19:00:00Z", team1: "USA",           team2: "Australia",            group: "D", venue: "Lumen Field, Seattle",                  result: { s1: 2, s2: 0 } },
  { id: 32, kickoff: "2026-06-20T03:00:00Z", team1: "Türkiye",       team2: "Paraguay",             group: "D", venue: "Levi's Stadium, Santa Clara",           result: { s1: 0, s2: 1 } },
  { id: 59, kickoff: "2026-06-26T02:00:00Z", team1: "Türkiye",       team2: "USA",                  group: "D", venue: "SoFi Stadium, Inglewood",               result: { s1: 3, s2: 2 } },
  { id: 60, kickoff: "2026-06-26T02:00:00Z", team1: "Paraguay",      team2: "Australia",            group: "D", venue: "Levi's Stadium, Santa Clara",           result: { s1: 0, s2: 0 } },

  // Group E
  { id: 9,  kickoff: "2026-06-14T17:00:00Z", team1: "Germany",       team2: "Curaçao",              group: "E", venue: "NRG Stadium, Houston",                  result: { s1: 7, s2: 1 } },
  { id: 11, kickoff: "2026-06-14T23:00:00Z", team1: "Ivory Coast",   team2: "Ecuador",              group: "E", venue: "Lincoln Financial Field, Philadelphia",  result: { s1: 1, s2: 0 } },
  { id: 34, kickoff: "2026-06-20T20:00:00Z", team1: "Germany",       team2: "Ivory Coast",          group: "E", venue: "BMO Field, Toronto",                    result: { s1: 2, s2: 1 } },
  { id: 35, kickoff: "2026-06-21T00:00:00Z", team1: "Ecuador",       team2: "Curaçao",              group: "E", venue: "Arrowhead Stadium, Kansas City",         result: { s1: 0, s2: 0 } },
  { id: 55, kickoff: "2026-06-25T20:00:00Z", team1: "Curaçao",       team2: "Ivory Coast",          group: "E", venue: "Lincoln Financial Field, Philadelphia",  result: { s1: 0, s2: 2 } },
  { id: 56, kickoff: "2026-06-25T20:00:00Z", team1: "Ecuador",       team2: "Germany",              group: "E", venue: "MetLife Stadium, East Rutherford",      result: { s1: 2, s2: 1 } },

  // Group F
  { id: 10, kickoff: "2026-06-14T20:00:00Z", team1: "Netherlands",   team2: "Japan",                group: "F", venue: "AT&T Stadium, Arlington",               result: { s1: 2, s2: 2 } },
  { id: 12, kickoff: "2026-06-15T02:00:00Z", team1: "Sweden",        team2: "Tunisia",              group: "F", venue: "Estadio BBVA, Monterrey",               result: { s1: 5, s2: 1 } },
  { id: 33, kickoff: "2026-06-20T17:00:00Z", team1: "Netherlands",   team2: "Sweden",               group: "F", venue: "NRG Stadium, Houston",                  result: { s1: 5, s2: 1 } },
  { id: 36, kickoff: "2026-06-21T04:00:00Z", team1: "Tunisia",       team2: "Japan",                group: "F", venue: "Estadio BBVA, Monterrey",               result: { s1: 0, s2: 4 } },
  { id: 57, kickoff: "2026-06-25T23:00:00Z", team1: "Tunisia",       team2: "Netherlands",          group: "F", venue: "Arrowhead Stadium, Kansas City",         result: { s1: 1, s2: 3 } },
  { id: 58, kickoff: "2026-06-25T23:00:00Z", team1: "Japan",         team2: "Sweden",               group: "F", venue: "AT&T Stadium, Arlington",               result: { s1: 1, s2: 1 } },

  // Group G
  { id: 14, kickoff: "2026-06-15T19:00:00Z", team1: "Belgium",       team2: "Egypt",                group: "G", venue: "Lumen Field, Seattle",                  result: { s1: 1, s2: 1 } },
  { id: 16, kickoff: "2026-06-16T01:00:00Z", team1: "Iran",          team2: "New Zealand",          group: "G", venue: "SoFi Stadium, Inglewood",               result: { s1: 2, s2: 2 } },
  { id: 38, kickoff: "2026-06-21T19:00:00Z", team1: "Belgium",       team2: "Iran",                 group: "G", venue: "SoFi Stadium, Inglewood",               result: { s1: 0, s2: 0 } },
  { id: 40, kickoff: "2026-06-22T01:00:00Z", team1: "New Zealand",   team2: "Egypt",                group: "G", venue: "BC Place, Vancouver",                   result: { s1: 1, s2: 3 } },
  { id: 65, kickoff: "2026-06-27T03:00:00Z", team1: "New Zealand",   team2: "Belgium",              group: "G", venue: "BC Place, Vancouver",                   result: { s1: 1, s2: 5 } },
  { id: 66, kickoff: "2026-06-27T03:00:00Z", team1: "Egypt",         team2: "Iran",                 group: "G", venue: "Lumen Field, Seattle",                  result: { s1: 1, s2: 1 } },

  // Group H
  { id: 13, kickoff: "2026-06-15T16:00:00Z", team1: "Spain",         team2: "Cape Verde",           group: "H", venue: "Mercedes-Benz Stadium, Atlanta",        result: { s1: 0, s2: 0 } },
  { id: 15, kickoff: "2026-06-15T22:00:00Z", team1: "Saudi Arabia",  team2: "Uruguay",              group: "H", venue: "Hard Rock Stadium, Miami Gardens",      result: { s1: 1, s2: 1 } },
  { id: 37, kickoff: "2026-06-21T16:00:00Z", team1: "Spain",         team2: "Saudi Arabia",         group: "H", venue: "Mercedes-Benz Stadium, Atlanta",        result: { s1: 4, s2: 0 } },
  { id: 39, kickoff: "2026-06-21T22:00:00Z", team1: "Uruguay",       team2: "Cape Verde",           group: "H", venue: "Hard Rock Stadium, Miami Gardens",      result: { s1: 1, s2: 1 } },
  { id: 63, kickoff: "2026-06-27T00:00:00Z", team1: "Cape Verde",    team2: "Saudi Arabia",         group: "H", venue: "NRG Stadium, Houston",                  result: { s1: 0, s2: 0 } },
  { id: 64, kickoff: "2026-06-27T00:00:00Z", team1: "Uruguay",       team2: "Spain",                group: "H", venue: "Estadio Akron, Zapopan",                result: { s1: 0, s2: 1 } },

  // Group I
  { id: 17, kickoff: "2026-06-16T19:00:00Z", team1: "France",        team2: "Senegal",              group: "I", venue: "MetLife Stadium, East Rutherford",      result: { s1: 3, s2: 1 } },
  { id: 18, kickoff: "2026-06-16T22:00:00Z", team1: "Iraq",          team2: "Norway",               group: "I", venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 4 } },
  { id: 42, kickoff: "2026-06-22T21:00:00Z", team1: "France",        team2: "Iraq",                 group: "I", venue: "Lincoln Financial Field, Philadelphia",  result: { s1: 3, s2: 0 } },
  { id: 43, kickoff: "2026-06-23T00:00:00Z", team1: "Norway",        team2: "Senegal",              group: "I", venue: "MetLife Stadium, East Rutherford",      result: { s1: 3, s2: 2 } },
  { id: 61, kickoff: "2026-06-26T19:00:00Z", team1: "Norway",        team2: "France",               group: "I", venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 4 } },
  { id: 62, kickoff: "2026-06-26T19:00:00Z", team1: "Senegal",       team2: "Iraq",                 group: "I", venue: "BMO Field, Toronto",                    result: { s1: 5, s2: 0 } },

  // Group J
  { id: 19, kickoff: "2026-06-17T01:00:00Z", team1: "Argentina",     team2: "Algeria",              group: "J", venue: "Arrowhead Stadium, Kansas City",         result: { s1: 3, s2: 0 } },
  { id: 20, kickoff: "2026-06-17T04:00:00Z", team1: "Austria",       team2: "Jordan",               group: "J", venue: "Levi's Stadium, Santa Clara",           result: { s1: 3, s2: 1 } },
  { id: 41, kickoff: "2026-06-22T17:00:00Z", team1: "Argentina",     team2: "Austria",              group: "J", venue: "AT&T Stadium, Arlington",               result: { s1: 2, s2: 0 } },
  { id: 44, kickoff: "2026-06-23T03:00:00Z", team1: "Jordan",        team2: "Algeria",              group: "J", venue: "Levi's Stadium, Santa Clara",           result: { s1: 1, s2: 2 } },
  { id: 71, kickoff: "2026-06-28T02:00:00Z", team1: "Algeria",       team2: "Austria",              group: "J", venue: "Arrowhead Stadium, Kansas City",         result: { s1: 3, s2: 3 } },
  { id: 72, kickoff: "2026-06-28T02:00:00Z", team1: "Jordan",        team2: "Argentina",            group: "J", venue: "AT&T Stadium, Arlington",               result: { s1: 1, s2: 3 } },

  // Group K
  { id: 21, kickoff: "2026-06-17T17:00:00Z", team1: "Portugal",      team2: "DR Congo",             group: "K", venue: "NRG Stadium, Houston",                  result: { s1: 1, s2: 1 } },
  { id: 24, kickoff: "2026-06-17T23:00:00Z", team1: "Uzbekistan",    team2: "Colombia",             group: "K", venue: "Estadio Azteca, Mexico City",           result: { s1: 1, s2: 3 } },
  { id: 45, kickoff: "2026-06-23T17:00:00Z", team1: "Portugal",      team2: "Uzbekistan",           group: "K", venue: "NRG Stadium, Houston",                  result: { s1: 5, s2: 0 } },
  { id: 48, kickoff: "2026-06-24T02:00:00Z", team1: "Colombia",      team2: "DR Congo",             group: "K", venue: "Estadio Akron, Zapopan",                result: { s1: 1, s2: 0 } },
  { id: 69, kickoff: "2026-06-28T00:00:00Z", team1: "Colombia",      team2: "Portugal",             group: "K", venue: "Hard Rock Stadium, Miami Gardens",      result: { s1: 0, s2: 0 } },
  { id: 70, kickoff: "2026-06-28T00:00:00Z", team1: "DR Congo",      team2: "Uzbekistan",           group: "K", venue: "Mercedes-Benz Stadium, Atlanta",        result: { s1: 3, s2: 1 } },

  // Group L
  { id: 22, kickoff: "2026-06-17T20:00:00Z", team1: "England",       team2: "Croatia",              group: "L", venue: "AT&T Stadium, Arlington",               result: { s1: 4, s2: 2 } },
  { id: 23, kickoff: "2026-06-18T23:00:00Z", team1: "Ghana",         team2: "Panama",               group: "L", venue: "BMO Field, Toronto",                    result: { s1: 1, s2: 0 } },
  { id: 46, kickoff: "2026-06-23T20:00:00Z", team1: "England",       team2: "Ghana",                group: "L", venue: "Gillette Stadium, Foxborough",          result: { s1: 0, s2: 0 } },
  { id: 47, kickoff: "2026-06-23T23:00:00Z", team1: "Panama",        team2: "Croatia",              group: "L", venue: "BMO Field, Toronto",                    result: { s1: 0, s2: 1 } },
  { id: 67, kickoff: "2026-06-27T21:00:00Z", team1: "Panama",        team2: "England",              group: "L", venue: "MetLife Stadium, East Rutherford",      result: { s1: 1, s2: 2 } },
  { id: 68, kickoff: "2026-06-27T21:00:00Z", team1: "Croatia",       team2: "Ghana",                group: "L", venue: "Lincoln Financial Field, Philadelphia",  result: { s1: 2, s2: 1 } },

  // ── ROUND OF 32 ──
  { id: 73, kickoff: "2026-06-28T19:00:00Z", team1: "Canada",        team2: "South Africa",         group: "R32", venue: "SoFi Stadium, Inglewood",              result: { s1: 1, s2: 0 } },
  { id: 74, kickoff: "2026-06-29T17:00:00Z", team1: "Germany",       team2: "Paraguay",             group: "R32", venue: "Gillette Stadium, Foxborough",          result: { s1: 1, s2: 1 }, pen: { s1: 3, s2: 4 } },
  { id: 76, kickoff: "2026-06-29T21:00:00Z", team1: "Brazil",        team2: "Japan",                group: "R32", venue: "NRG Stadium, Houston",                  result: { s1: 2, s2: 1 } },
  { id: 75, kickoff: "2026-06-29T23:00:00Z", team1: "Netherlands",   team2: "Morocco",              group: "R32", venue: "Estadio BBVA, Monterrey",               result: { s1: 1, s2: 1 }, pen: { s1: 2, s2: 3 } },
  { id: 78, kickoff: "2026-06-30T17:00:00Z", team1: "Ivory Coast",   team2: "Norway",               group: "R32", venue: "AT&T Stadium, Arlington",               result: null },
  { id: 77, kickoff: "2026-06-30T21:00:00Z", team1: "France",        team2: "Sweden",               group: "R32", venue: "MetLife Stadium, East Rutherford",      result: null },
  { id: 79, kickoff: "2026-07-01T01:00:00Z", team1: "Mexico",        team2: "Ecuador",              group: "R32", venue: "Estadio Azteca, Mexico City",           result: null },
  { id: 80, kickoff: "2026-07-01T16:00:00Z", team1: "England",       team2: "DR Congo",             group: "R32", venue: "Mercedes-Benz Stadium, Atlanta",        result: null },
  { id: 82, kickoff: "2026-07-01T20:00:00Z", team1: "Belgium",       team2: "Senegal",              group: "R32", venue: "Lumen Field, Seattle",                  result: null },
  { id: 81, kickoff: "2026-07-02T00:00:00Z", team1: "USA",           team2: "Bosnia-Herzegovina",   group: "R32", venue: "Levi's Stadium, Santa Clara",           result: null },
  { id: 84, kickoff: "2026-07-02T19:00:00Z", team1: "Spain",         team2: "Austria",              group: "R32", venue: "SoFi Stadium, Inglewood",               result: null },
  { id: 83, kickoff: "2026-07-02T23:00:00Z", team1: "Portugal",      team2: "Croatia",              group: "R32", venue: "BMO Field, Toronto",                    result: null },
  { id: 85, kickoff: "2026-07-03T03:00:00Z", team1: "Switzerland",   team2: "Algeria",              group: "R32", venue: "BC Place, Vancouver",                   result: null },
  { id: 88, kickoff: "2026-07-03T18:00:00Z", team1: "Australia",     team2: "Egypt",                group: "R32", venue: "AT&T Stadium, Arlington",               result: null },
  { id: 86, kickoff: "2026-07-03T22:00:00Z", team1: "Argentina",     team2: "Cape Verde",           group: "R32", venue: "Hard Rock Stadium, Miami Gardens",      result: null },
  { id: 87, kickoff: "2026-07-04T01:30:00Z", team1: "Colombia",      team2: "Ghana",                group: "R32", venue: "Arrowhead Stadium, Kansas City",         result: null },

  // ── ROUND OF 16 ──
  { id: 89, kickoff: "2026-07-04T17:00:00Z", team1: "Canada",        team2: "Morocco",              group: "R16", venue: "NRG Stadium, Houston",                  result: null },
  { id: 90, kickoff: "2026-07-04T21:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "Lincoln Financial Field, Philadelphia",  result: null },
  { id: 91, kickoff: "2026-07-05T20:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "MetLife Stadium, East Rutherford",      result: null },
  { id: 92, kickoff: "2026-07-06T00:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "Estadio Azteca, Mexico City",           result: null },
  { id: 93, kickoff: "2026-07-06T19:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "AT&T Stadium, Arlington",               result: null },
  { id: 94, kickoff: "2026-07-07T00:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "Lumen Field, Seattle",                  result: null },
  { id: 95, kickoff: "2026-07-07T16:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "Mercedes-Benz Stadium, Atlanta",        result: null },
  { id: 96, kickoff: "2026-07-07T20:00:00Z", team1: "TBD",           team2: "TBD",                  group: "R16", venue: "BC Place, Vancouver",                   result: null },

  // ── QUARTERFINALS ──
  { id: 97,  kickoff: "2026-07-09T20:00:00Z", team1: "TBD",          team2: "TBD",                  group: "QF", venue: "Gillette Stadium, Foxborough",           result: null },
  { id: 98,  kickoff: "2026-07-10T19:00:00Z", team1: "TBD",          team2: "TBD",                  group: "QF", venue: "SoFi Stadium, Inglewood",               result: null },
  { id: 99,  kickoff: "2026-07-11T21:00:00Z", team1: "TBD",          team2: "TBD",                  group: "QF", venue: "Hard Rock Stadium, Miami Gardens",      result: null },
  { id: 100, kickoff: "2026-07-12T01:00:00Z", team1: "TBD",          team2: "TBD",                  group: "QF", venue: "Arrowhead Stadium, Kansas City",         result: null },

  // ── SEMIFINALS ──
  { id: 101, kickoff: "2026-07-14T19:00:00Z", team1: "TBD",          team2: "TBD",                  group: "SF", venue: "AT&T Stadium, Arlington",               result: null },
  { id: 102, kickoff: "2026-07-15T19:00:00Z", team1: "TBD",          team2: "TBD",                  group: "SF", venue: "Mercedes-Benz Stadium, Atlanta",        result: null },

  // ── THIRD PLACE ──
  { id: 103, kickoff: "2026-07-18T21:00:00Z", team1: "TBD",          team2: "TBD",                  group: "3P", venue: "Hard Rock Stadium, Miami Gardens",      result: null },

  // ── FINAL ──
  { id: 104, kickoff: "2026-07-19T19:00:00Z", team1: "TBD",          team2: "TBD",                  group: "F",  venue: "MetLife Stadium, East Rutherford",      result: null },
];

export const GROUP_LABELS = {
  A: "Group A", B: "Group B", C: "Group C", D: "Group D",
  E: "Group E", F: "Group F", G: "Group G", H: "Group H",
  I: "Group I", J: "Group J", K: "Group K", L: "Group L",
  R32: "Round of 32", R16: "Round of 16",
  QF: "Quarter-finals", SF: "Semi-finals",
  "3P": "Third Place", F: "Final",
};
