const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');
const imagesDir = path.join(rootDir, 'images');

// 1. Get all image files in images/
const imageFiles = fs.readdirSync(imagesDir).filter(f => {
  const full = path.join(imagesDir, f);
  return fs.statSync(full).isFile();
});

// 2. Recursively get all project files to scan
function getProjectFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === '.gemini' || file === 'images') {
      continue;
    }
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getProjectFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

const projectFiles = getProjectFiles(rootDir);

// 3. Read content of all project files
const allContent = projectFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

let removedCount = 0;
let totalBytesSaved = 0;
const removedList = [];

imageFiles.forEach(img => {
  if (!allContent.includes(img)) {
    const filePath = path.join(imagesDir, img);
    const size = fs.statSync(filePath).size;
    totalBytesSaved += size;
    fs.unlinkSync(filePath);
    removedCount++;
    removedList.push({ name: img, size: (size / (1024 * 1024)).toFixed(2) + ' MB' });
  }
});

console.log(`\nSuccessfully removed ${removedCount} unused image files.`);
console.log(`Total space freed: ${(totalBytesSaved / (1024 * 1024)).toFixed(2)} MB`);
console.log('\nRemoved files:');
removedList.forEach(item => console.log(` - ${item.name} (${item.size})`));

const remainingImages = fs.readdirSync(imagesDir);
console.log(`\nRemaining active images in images/: ${remainingImages.length}`);
