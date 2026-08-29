import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // replace <!-- ... --> with {/* ... */}
      const newContent = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Fixed comments in:', fullPath);
      }
    }
  });
}

walkDir('src');
console.log('Finished updating JSX comments.');
