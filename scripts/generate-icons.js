const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// ============================================================================
// SVG ASSETS FROM GOSHEN LOGO EMBLEM
// ============================================================================

// 1. Browser Tab Favicon (Transparent SVG with dark/light mode responsive styles)
const faviconSvg = `<svg width="120" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>Goshen Laikipia Logo</title>
  <desc>Goshen luxury safari camp emblem in Laikipia, Kenya</desc>
  <style>
    .primary-stroke { stroke: #2C2A25; }
    .primary-fill { fill: #2C2A25; }
    .accent-fill { fill: #591C27; }
    @media (prefers-color-scheme: dark) {
      .primary-stroke { stroke: #F4F1EB; }
      .primary-fill { fill: #F4F1EB; }
      .accent-fill { fill: #C5A059; }
    }
  </style>
  <ellipse cx="50" cy="60" rx="42" ry="56" class="primary-stroke" stroke-width="2.5" />
  <ellipse cx="50" cy="60" rx="38" ry="52" class="primary-stroke" stroke-width="0.8" stroke-opacity="0.5" />
  <text x="41" y="74" text-anchor="middle" class="primary-fill" font-size="48" font-weight="300" font-family="'Cormorant Garamond', Georgia, serif">G</text>
  <text x="61" y="84" text-anchor="middle" class="accent-fill" font-size="42" font-style="italic" font-family="'Cormorant Garamond', Georgia, serif">L</text>
</svg>`;

// 2. Apple Touch Icon & App Monogram (180x180 px Burgundy Badge with Gold/Cream Emblem)
const appleIconSvg = `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#591C27" />
  <g transform="translate(40, 15)">
    <ellipse cx="50" cy="75" rx="42" ry="56" stroke="#F4F1EB" stroke-width="2.5" />
    <ellipse cx="50" cy="75" rx="38" ry="52" stroke="#F4F1EB" stroke-width="0.8" stroke-opacity="0.4" />
    <text x="41" y="89" text-anchor="middle" fill="#F4F1EB" font-size="48" font-weight="300" font-family="'Cormorant Garamond', Georgia, serif">G</text>
    <text x="61" y="99" text-anchor="middle" fill="#C5A059" font-size="42" font-style="italic" font-family="'Cormorant Garamond', Georgia, serif">L</text>
  </g>
</svg>`;

async function generate() {
  const rootDir = path.resolve(__dirname, '..');
  const appDir = path.join(rootDir, 'src', 'app');
  const publicDir = path.join(rootDir, 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Export SVG favicons
  console.log('Generating SVG icons...');
  fs.writeFileSync(path.join(appDir, 'icon.svg'), faviconSvg, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), faviconSvg, 'utf-8');

  // 2. Export Apple Icon PNG (180x180)
  console.log('Generating Apple Icon PNG (180x180)...');
  const applePngBuffer = await sharp(Buffer.from(appleIconSvg))
    .resize(180, 180)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), applePngBuffer);
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), applePngBuffer);

  // 3. Export Standard 32x32 Favicon PNG
  console.log('Generating Favicon PNGs...');
  const faviconPng32 = await sharp(Buffer.from(appleIconSvg))
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), faviconPng32);

  // Also write public/favicon.ico
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), faviconPng32);

  console.log('All icons successfully generated in src/app/ and public/:');
  console.log('  - src/app/icon.svg');
  console.log('  - src/app/apple-icon.png');
  console.log('  - public/icon.svg');
  console.log('  - public/apple-icon.png');
  console.log('  - public/favicon.ico');
}

generate().catch((err) => {
  console.error('Icon generation failed:', err);
  process.exit(1);
});
