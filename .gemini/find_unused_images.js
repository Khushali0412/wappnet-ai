const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');
const imagesDir = path.join(rootDir, 'images');

// 1. Get all image files in images/
const imageFiles = fs.readdirSync(imagesDir).filter(f => {
  const full = path.join(imagesDir, f);
  return fs.statSync(full).isFile();
});

console.log(`Total images in images/: ${imageFiles.length}`);

// 2. Recursively get all project files to scan (html, css, js, json, etc.)
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
      const ext = path.extname(file).toLowerCase();
      if (['.html', '.css', '.js', '.json', '.svg', '.md'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const projectFiles = getProjectFiles(rootDir);
console.log(`Scanning ${projectFiles.length} project files:`);
projectFiles.forEach(f => console.log(' - ' + path.relative(rootDir, f)));

// 3. Read content of all project files
const fileContents = projectFiles.map(f => ({
  file: f,
  content: fs.readFileSync(f, 'utf8')
}));

// 4. For each image in images/, check if its filename is mentioned in any project file
const usedImages = new Set();
const unusedImages = [];

imageFiles.forEach(img => {
  // Check exact filename or path
  let isUsed = false;
  for (const { file, content } of fileContents) {
    if (content.includes(img)) {
      isUsed = true;
      usedImages.add(img);
      break;
    }
  }
  if (!isUsed) {
    unusedImages.push(img);
  }
});

console.log('\n--- USED IMAGES (' + usedImages.size + ') ---');
Array.from(usedImages).sort().forEach(img => console.log('  [USED] ' + img));

console.log('\n--- UNUSED IMAGES (' + unusedImages.length + ') ---');
unusedImages.sort().forEach(img => console.log('  [UNUSED] ' + img));
