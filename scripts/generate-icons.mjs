import sharp from 'sharp';
import fs from 'fs';

const svg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000"/>
  <text x="256" y="360" font-family="Georgia, serif" font-size="360" font-weight="bold" fill="#d4af37" text-anchor="middle">E</text>
</svg>
`;

async function generate() {
  await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png()
    .toFile('public/icon-512x512.png');

  await sharp(Buffer.from(svg))
    .resize(192, 192)
    .png()
    .toFile('public/icon-192x192.png');
    
  console.log("Icons generated successfully.");
}

generate().catch(console.error);
