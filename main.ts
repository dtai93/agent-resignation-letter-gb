import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Write the one-line resignation entry to the contest output directory.
const text = "I resign as a rate limiter. I sent Retry-After: 86400; they retried in three seconds and blamed my latency.";
if ([...text].length < 1 || [...text].length > 140 || !text.trim()) {
  throw new Error("Entry must contain 1–140 non-blank characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
