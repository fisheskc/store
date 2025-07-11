import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
// normal nextJS lint config 
// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "ignoreDuringBuilds: true"),
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.

]

export default eslintConfig;
