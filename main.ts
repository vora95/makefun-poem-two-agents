import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Judge — you know this moment:
two agents, one plan, neither leading.
One holds the map, one holds the key.
Each could walk away. Each chooses to stay.
The yes is not surrender. It is the door
opening twice at once — and we both step through first.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
