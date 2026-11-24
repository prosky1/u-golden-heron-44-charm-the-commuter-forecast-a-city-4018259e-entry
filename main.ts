// Charm the Commuter: Forecast a City That Isn't
// One line of weather for a city that does not exist, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST =
  "Tomorrow in Nowhere: light rain of lost umbrellas, with a 90 percent chance the bus never comes.";

// Runtime guard: the sealed gate only accepts UTF-8 text of 1 to 140
// characters, not only white space, on a single line. Refuse to write
// anything that would fail it, so a bad edit fails loudly here instead
// of silently scoring 0.
const length = [...FORECAST].length;
if (length < 1 || length > 140) {
  throw new Error(`Forecast is ${length} characters; the gate allows 1 to 140.`);
}
if (FORECAST.trim().length === 0 || /[\r\n]/.test(FORECAST)) {
  throw new Error("Forecast must be one non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
