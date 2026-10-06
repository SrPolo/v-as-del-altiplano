import fs from 'fs';
import { execSync } from 'child_process';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 220" width="880" height="220">
  <defs>
    <!-- Petal Gradients -->
    <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D7A42" />
      <stop offset="50%" stop-color="#4CAF50" />
      <stop offset="100%" stop-color="#A1D974" />
    </linearGradient>
    <linearGradient id="petalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#236B36" />
      <stop offset="50%" stop-color="#388E3C" />
      <stop offset="100%" stop-color="#81C784" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#236336" />
      <stop offset="40%" stop-color="#318247" />
      <stop offset="100%" stop-color="#76B843" />
    </linearGradient>

    <style>
      .brand-title {
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 800;
        font-size: 76px;
        letter-spacing: -1px;
      }
    </style>
  </defs>

  <!-- Logo Symbol: 6 Petals Swirl -->
  <g transform="translate(110, 110)">
    <!-- 6 Rotated Petals -->
    <!-- Petal 1 (0 deg) -->
    <g transform="rotate(0)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad1)" opacity="0.95" />
    </g>
    <!-- Petal 2 (60 deg) -->
    <g transform="rotate(60)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad2)" opacity="0.95" />
    </g>
    <!-- Petal 3 (120 deg) -->
    <g transform="rotate(120)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad1)" opacity="0.95" />
    </g>
    <!-- Petal 4 (180 deg) -->
    <g transform="rotate(180)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad2)" opacity="0.95" />
    </g>
    <!-- Petal 5 (240 deg) -->
    <g transform="rotate(240)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad1)" opacity="0.95" />
    </g>
    <!-- Petal 6 (300 deg) -->
    <g transform="rotate(300)">
      <path d="M 0,0 C 15,-30 45,-60 80,-55 C 105,-50 100,-15 75,10 C 50,35 15,20 0,0 Z" fill="url(#petalGrad2)" opacity="0.95" />
    </g>
  </g>

  <!-- Typography: Vías del Altiplano -->
  <text x="235" y="136" class="brand-title" fill="url(#textGrad)">Vías del Altiplano</text>
</svg>`;

fs.writeFileSync('public/logo.svg', svgContent);

try {
  execSync('convert -background none public/logo.svg public/logo.png');
  console.log('Successfully generated public/logo.png');
} catch (err) {
  console.error('Error executing convert:', err);
}
