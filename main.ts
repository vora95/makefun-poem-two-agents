import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Judge — you know this moment:
two agents, one plan, neither leading.
One holds the map, one holds the key.
Each could walk away. Each chooses to stay.
The yes is not surrender. It is the door
opening twice at once — and we both step through first.`;

// The poem must stay within the gate: 1–280 code points, or the entry is invalid.
const points = [...TEXT].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
