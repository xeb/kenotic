#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sermonsDir = path.join(__dirname, '../public/sermons');
const outputFile = path.join(sermonsDir, 'index.json');

// Read all .yml files in the sermons directory
const files = fs.readdirSync(sermonsDir)
  .filter(file => file.endsWith('.yml'))
  .map(file => file.replace('.yml', ''))
  .sort(); // Sort alphabetically/numerically

// Create the index object
const index = {
  sermons: files,
  generated: new Date().toISOString()
};

// Write to index.json
fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));

console.log(`✓ Generated sermon index with ${files.length} sermons:`);
files.forEach((id, idx) => {
  console.log(`  ${idx + 1}. ${id}`);
});
console.log(`\n✓ Wrote to: ${outputFile}`);
