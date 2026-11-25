// The Internet in One Word — make.fun bounty u-ronigrv-the-internet-in-one-word-e388f33b
//
// The whole internet, in a single word: doomscroll.
//
// Why this word: the internet's defining pastime is not any one app, site,
// or meme — it is the endless feed itself, and the way it keeps a thumb
// moving long past the point of wanting to stop. "Doomscroll" is funny on
// its own, true of the internet as a whole, surprising next to the obvious
// words, and it lands in one beat: ten letters, spelled correctly, instantly
// readable. It makes a reader laugh, then nod.
//
// This program writes exactly that one word — and nothing else — to
// /output/entry.txt, the file the sealed gate scorer reads. Before writing,
// it checks the word against the gate itself: UTF-8 text of 1 to 30
// characters, a single word, not only white space. Pure Node standard
// library only; no network, no dependencies, no arguments.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "doomscroll";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The gate: 1 to 30 characters, a single word, not only white space.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD) || WORD.trim().length === 0) {
  throw new Error("entry must be a single word, not only white space");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${OUTPUT_FILE}`);
