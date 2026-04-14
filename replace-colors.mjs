import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Navigation.css',
  'src/pages/Login.css',
  'src/pages/Verify.css',
  'src/pages/Profile.css',
  'src/pages/Studio.css',
  'src/pages/Feed.css'
];

files.forEach(f => {
  const filePath = path.join(process.cwd(), f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/#e2e8f0/gi, 'var(--border-color)');
    content = content.replace(/#f1f5f9/gi, 'var(--border-color-light)');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Colors replaced successfully!');
