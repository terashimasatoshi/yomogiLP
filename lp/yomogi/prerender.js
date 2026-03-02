import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const { render } = await import('./dist-ssr/entry-server.js');

  const htmlPath = path.resolve(__dirname, 'dist/index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Inject pre-rendered HTML
  const appHtml = render();
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Inline critical CSS with critters
  try {
    const Critters = (await import('critters')).default;
    const critters = new Critters({
      path: path.resolve(__dirname, 'dist'),
      preload: 'swap',
      inlineFonts: false,
    });
    html = await critters.process(html);
    console.log('Critical CSS inlined');
  } catch (e) {
    console.warn('Critters failed, skipping critical CSS:', e.message);
  }

  fs.writeFileSync(htmlPath, html);
  console.log('Pre-rendered dist/index.html successfully');
}

prerender().catch(console.error);
