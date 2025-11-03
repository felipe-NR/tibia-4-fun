import globals from "globals";
import { baseEslintConfig } from "./base-eslint-config";

export const backendEslintConfig = [
  ...baseEslintConfig,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
