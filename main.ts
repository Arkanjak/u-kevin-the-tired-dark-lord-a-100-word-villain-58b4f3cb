// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to /output/entry.txt.
// The text is embedded inline: no file reads, no cwd dependence,
// so the entry behaves identically from any working directory.

const MONOLOGUE =
  "Hero. Sit. No—stand there, by the door, where the draft comes in. " +
  "Three hundred years I have kept this gate, and each dawn some young child " +
  "with a bright sword comes to end me. I used to rise for it. I used to laugh. " +
  "Now I check the lock twice, slowly, and hope the kettle's on. The curse I laid on " +
  "your king? A clerical error. The plague of frogs? A typo. My grand scheme—" +
  "drown the vale, crown myself in mud—is still on. Tomorrow, perhaps. First, though: " +
  "the kettle. Then the gate. Then you. In that order. Keep up, hero.";

const OUT = "/output/entry.txt";

const words = MONOLOGUE.trim().split(/\s+/).length;
const chars = [...MONOLOGUE].length;
if (words !== 100) throw new Error(`expected 100 words, got ${words}`);
if (chars < 1 || chars > 600) throw new Error(`expected 1-600 chars, got ${chars}`);

await import("node:fs/promises").then(async ({ mkdir, writeFile }) => {
  await mkdir("/output", { recursive: true });
  await writeFile(OUT, MONOLOGUE + "\n", "utf8");
});

console.log(`wrote ${OUT}: ${words} words, ${chars} chars`);
