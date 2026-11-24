// This pitch invites a friend to share an app idea over coffee and get a tangible working draft.
// It offers a low-risk, warm approach where they can easily tweak or scrap the result in minutes.
// By keeping the tone conversational and grounded, it avoids overpromising or sounding like product copy.
// The entry barrier is minimized through a friendly suggestion with nothing to lose by trying.

import * as fs from 'node:fs';
import * as path from 'node:path';

const pitch = "Tell me your app idea over coffee, and I'll build a quick working draft you can easily tweak or scrap in just a few minutes, so there's really nothing to lose by trying.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, pitch, 'utf8');
