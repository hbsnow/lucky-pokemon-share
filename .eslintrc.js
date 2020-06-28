"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      settings: {
        react: {
          pragma: "React",
          version: "detect",
        },
      },
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
      rules: {
        "no-unused-vars": 0,
        "import/order": [
          2,
          {
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": 2,
        "react/jsx-no-target-blank": 2,
        "react/prop-types": 0,
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 2,
      },
    },
  ],
  globals: {
    React: "writable",
  },
};
