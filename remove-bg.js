const sharp = require('sharp');
const path = require('path');

async function processDateTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing date ${inputPath}: ${width}x${height}`);

  const threshold = 18;
  const feather = 12;

  for (let y = 0; y < height; y++) {
    // Left boundary
    let leftBoundary = -1;
    for (let x = 0; x < width / 2; x++) {
      const idx = (y * width + x) * channels;
      const b = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      if (b > threshold) {
        leftBoundary = x;
        break;
      }
    }

    if (leftBoundary === -1) {
      for (let x = 0; x < width; x++) {
        data[(y * width + x) * channels + 3] = 0;
      }
      continue;
    }

    // Right boundary
    let rightBoundary = -1;
    for (let x = width - 1; x >= width / 2; x--) {
      const idx = (y * width + x) * channels;
      const b = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      if (b > threshold) {
        rightBoundary = x;
        break;
      }
    }

    // Clear left
    for (let x = 0; x < leftBoundary; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }

    // Feather left
    for (let x = leftBoundary; x < Math.min(width, leftBoundary + feather); x++) {
      const idx = (y * width + x) * channels;
      const b = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      if (b < threshold + 25) {
        data[idx + 3] = Math.min(255, Math.round(((x - leftBoundary) / feather) * 255));
      }
    }

    // Clear right
    for (let x = rightBoundary + 1; x < width; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }

    // Feather right
    for (let x = Math.max(0, rightBoundary - feather); x <= rightBoundary; x++) {
      const idx = (y * width + x) * channels;
      const b = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      if (b < threshold + 25) {
        data[idx + 3] = Math.min(255, Math.round(((rightBoundary - x) / feather) * 255));
      }
    }
  }

  // Clear top and bottom
  let topRow = 0;
  for (let y = 0; y < height; y++) {
    let hasDate = false;
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > 0) {
        hasDate = true;
        break;
      }
    }
    if (hasDate) {
      topRow = y;
      break;
    }
  }

  let bottomRow = height - 1;
  for (let y = height - 1; y >= 0; y--) {
    let hasDate = false;
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > 0) {
        hasDate = true;
        break;
      }
    }
    if (hasDate) {
      bottomRow = y;
      break;
    }
  }

  for (let y = 0; y < topRow; y++) {
    for (let x = 0; x < width; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }
  for (let y = bottomRow + 1; y < height; y++) {
    for (let x = 0; x < width; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Saved transparent date to: ${outputPath}`);
}

async function run() {
  await processDateTransparent(
    path.join(__dirname, 'public/images/floating-date-1.jpg'),
    path.join(__dirname, 'public/images/floating-date-1.png')
  );
  await processDateTransparent(
    path.join(__dirname, 'public/images/floating-date-2.jpg'),
    path.join(__dirname, 'public/images/floating-date-2.png')
  );
}

run().catch(console.error);
