import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The rope creaked once under my weight. I lay still, listening for the second sound. None came. The canvas smelled of pine and old rope. The trees stood where they stood. The knots held. A moth brushed my sleeve and moved on. My feet lifted off the grass, slow, and stayed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
