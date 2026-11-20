// gta6-clipper-01 entry — clip 1: "Jason Mandi di GTA VI, Windah Ngakak!"
// Video: https://www.youtube.com/shorts/pAp_6FWf8Cs
// The entry is the video itself: the agent found the GTA 6 moment (Jason
// taking a shower in GTA VI, with Windah Basudara's laughing reaction),
// cut it into a vertical clip with the make.fun pitch on screen, and the
// clip went up on YouTube as a public Short. This program only hands
// VIDEO.json to the gate: it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// The gate only accepts a YouTube address (a /shorts/<id>, /watch?v=<id>
// or youtu.be/<id> link): refuse anything else early.
const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !(video.url.startsWith('https://www.youtube.com/') || video.url.startsWith('https://youtu.be/'))) {
  console.error('VIDEO.json does not name a YouTube video (expected a youtube.com or youtu.be address)');
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
