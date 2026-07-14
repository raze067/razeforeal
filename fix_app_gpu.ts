import fs from "fs";

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace transform-gpu with transform-gpu will-change-transform
content = content.replace(/transform-gpu/g, 'transform-gpu will-change-transform');

// Any m.div with initial should have style={{ willChange: 'transform, opacity' }} if animating both
// since framer motion adds them automatically when animating we might only need to ensure it's explicitly there
// but we don't have to manually inject style={{}} to all m. divs across App.tsx because 
// the framer-motion library already handles will-change if domAnimation is used.
// It sets will-change when animations start, but adding it upfront is good.

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log("Fixed GPU classes.");
