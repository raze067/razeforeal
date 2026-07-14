import fs from "fs";

const path = "src/App.tsx";
let content = fs.readFileSync(path, "utf8");

// Replace standard motion imports with LazyMotion, domAnimation, m
content = content.replace(
  "import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';",
  "import { LazyMotion, domAnimation, m, AnimatePresence, useScroll, useSpring } from 'motion/react';"
);

// Replace component occurrences: motion.div -> m.div
content = content.replace(/<motion\./g, "<m.");
content = content.replace(/<\/motion\./g, "</m.");

// Wrap the return value
content = content.replace(/return \(/, "return (\n    <LazyMotion features={domAnimation}>");
// We know the end of the file is:
//     </div>
//   );
// }
content = content.replace(/ {4}<\/div>\n  \);\n}/, "    </div>\n    </LazyMotion>\n  );\n}");

fs.writeFileSync(path, content, "utf8");

console.log("Updated App.tsx successfully.")
