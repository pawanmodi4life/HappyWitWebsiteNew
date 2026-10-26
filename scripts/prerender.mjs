import { readFile, writeFile, rm } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const indexPath = new URL('../dist/index.html', import.meta.url);
const template = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error('Expected one empty React root in the Vite HTML template.');
}

// Render exactly the app that the client hydrates; do not serve alternate bot copy.
const page = render();
if (!page.includes('<h1') || !page.includes('hello@happywitevents.com')) {
  throw new Error('Prerendered homepage is missing its heading or contact content.');
}

await writeFile(indexPath, template.replace(marker, () => `<div id="root">${page}</div>`));
await rm(new URL('../.prerender/', import.meta.url), { recursive: true, force: true });
console.log('Prerendered the existing homepage into dist/index.html.');
