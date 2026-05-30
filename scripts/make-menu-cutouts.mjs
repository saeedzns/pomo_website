import { mkdir, readdir, rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = "public/images/menu";
const outputDir = "public/images/menu/cutouts";
const sourceExts = new Set([".png"]);

const isNeutral = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max - min <= 22;
};

const colorDistance = (a, b) => {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
};

const quantize = (value) => Math.round(value / 8) * 8;

const collectEdgePalette = (data, width, height) => {
  const palette = new Map();

  const add = (x, y) => {
    const pixel = (y * width + x) * 4;
    const r = data[pixel];
    const g = data[pixel + 1];
    const b = data[pixel + 2];
    if (!isNeutral(r, g, b)) return;

    const key = `${quantize(r)},${quantize(g)},${quantize(b)}`;
    palette.set(key, [r, g, b]);
  };

  for (let x = 0; x < width; x += 2) {
    add(x, 0);
    add(x, height - 1);
  }

  for (let y = 0; y < height; y += 2) {
    add(0, y);
    add(width - 1, y);
  }

  return [...palette.values()];
};

const isNeutralShadowPixel = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max - min > 50) return false;
  const average = (r + g + b) / 3;
  return average >= 86 && average <= 252;
};

const makeAlphaMask = (data, width, height, options = {}) => {
  const alpha = new Uint8Array(width * height).fill(255);
  const visited = new Uint8Array(width * height);
  const queue = [];
  const palette = collectEdgePalette(data, width, height);
  const aggressiveNeutralCleanup = options.aggressiveNeutralCleanup ?? false;

  const isBackgroundPixel = (r, g, b) => {
    if (!isNeutral(r, g, b)) return false;
    return palette.some((color) => colorDistance(color, [r, g, b]) <= 34);
  };

  const enqueue = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = y * width + x;
    if (visited[index]) return;
    visited[index] = 1;

    const pixel = index * 4;
    if (isBackgroundPixel(data[pixel], data[pixel + 1], data[pixel + 2])) {
      alpha[index] = 0;
      queue.push(index);
    }
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }

  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  for (let head = 0; head < queue.length; head += 1) {
    const index = queue[head];
    const x = index % width;
    const y = Math.floor(index / width);
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  for (let pass = 0; pass < 2; pass += 1) {
    for (let y = 1; y < height - 1; y += 1) {
      for (let x = 1; x < width - 1; x += 1) {
        const index = y * width + x;
        if (alpha[index] === 0) continue;

        const touchesBackground =
          alpha[index - 1] === 0 ||
          alpha[index + 1] === 0 ||
          alpha[index - width] === 0 ||
          alpha[index + width] === 0;

        if (!touchesBackground) continue;

        const pixel = index * 4;
        if (isBackgroundPixel(data[pixel], data[pixel + 1], data[pixel + 2])) {
          alpha[index] = 0;
        }
      }
    }
  }

  if (aggressiveNeutralCleanup) {
    for (let pass = 0; pass < 80; pass += 1) {
      let changed = 0;

      for (let y = 1; y < height - 1; y += 1) {
        for (let x = 1; x < width - 1; x += 1) {
          const index = y * width + x;
          if (alpha[index] === 0) continue;

          const touchesBackground =
            alpha[index - 1] === 0 ||
            alpha[index + 1] === 0 ||
            alpha[index - width] === 0 ||
            alpha[index + width] === 0;

          if (!touchesBackground) continue;

          const pixel = index * 4;
          if (isNeutralShadowPixel(data[pixel], data[pixel + 1], data[pixel + 2])) {
            alpha[index] = 0;
            changed += 1;
          }
        }
      }

      if (changed === 0) break;
    }
  }

  return alpha;
};

const cleanPng = async (input, output, options = {}) => {
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const alpha = makeAlphaMask(data, info.width, info.height, options);

  for (let index = 0; index < alpha.length; index += 1) {
    data[index * 4 + 3] = alpha[index];
  }

  const temp = `${output}.tmp.png`;
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(temp);

  await rename(temp, output);

  return { data, info };
};

await mkdir(outputDir, { recursive: true });

const files = await readdir(inputDir);
const aggressiveMenuItems = new Set(["pasta-carbonara", "pasta-ragu", "pasta-amatriciana"]);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!sourceExts.has(ext)) continue;

  const name = path.basename(file, ext);
  const input = path.join(inputDir, file);
  const output = path.join(outputDir, `${name}.webp`);
  const { data, info } = await cleanPng(input, input, {
    aggressiveNeutralCleanup: aggressiveMenuItems.has(name),
  });

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .webp({ lossless: true, quality: 100, alphaQuality: 100 })
    .toFile(output);

  console.log(output);
}

const awardPairs = [
  ["pom img/trip advisor/Trip_advisor25.png", "public/images/awards/trip-advisor-2025.png"],
  ["pom img/trip advisor/Trip_advisor24.png", "public/images/awards/trip-advisor-2024.png"],
];

for (const [input, output] of awardPairs) {
  await cleanPng(input, output);
  console.log(output);
}
