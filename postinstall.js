// postinstall.js
import fs from "fs";

const rollupNative = "./node_modules/rollup/dist/native.js";
if (fs.existsSync(rollupNative)) {
  fs.writeFileSync(
    rollupNative,
    `throw new Error('Disabled native Rollup for Vercel');`
  );
  console.log("✅ Native Rollup disabled.");
}
