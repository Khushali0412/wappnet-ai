const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\2fcb7adb-9ea8-4e04-b4e8-cb5443e220b6',
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\2fcb7adb-9ea8-4e04-b4e8-cb5443e220b6\\.user_uploaded',
  'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\2fcb7adb-9ea8-4e04-b4e8-cb5443e220b6\\.tempmediaStorage',
  path.resolve('images'),
  path.resolve('uploads')
];

dirs.forEach(d => {
  if (fs.existsSync(d)) {
    console.log(`\n=== Directory: ${d} ===`);
    const files = fs.readdirSync(d);
    files.forEach(f => {
      const full = path.join(d, f);
      try {
        const stat = fs.statSync(full);
        if (stat.isFile()) {
          console.log(` - ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
        }
      } catch (e) {}
    });
  }
});
