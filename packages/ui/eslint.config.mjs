import { uiEslintConfig } from "@tibia-4-fun/eslint-config/ui-eslint-config";

/** @type {import("eslint").Linter.Config} */
export default [
    ...uiEslintConfig,
    {
        ignores: ["dist/**"],
    },
];
