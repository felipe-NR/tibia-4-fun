import { frontendEslintConfig } from "@tibia-4-fun/eslint-config/frontend-eslint-config";

/** @type {import("eslint").Linter.Config} */
export default [
    ...frontendEslintConfig,
    {
        ignores: ["dist/**"],
    },
];
