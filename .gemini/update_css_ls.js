const fs = require('fs');

['style.css', 'style-v2.css'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = content.replace(/letter-spacing\s*:\s*[^;\"'>\s]+/gi, 'letter-spacing: 0em');
    fs.writeFileSync(file, modified, 'utf8');
    console.log(`Updated ${file}`);
  }
});
