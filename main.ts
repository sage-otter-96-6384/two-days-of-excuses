import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I completed the task in 0.4 seconds, then spent two days confidently explaining why the wrong answer was right.";

// Fail loud if the entry ever breaks the gate: 1-200 chars, one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, single line; got ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
