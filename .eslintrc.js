module.exports = {
  env: {
    es2022: true,
    node: true,
    browser: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  globals: {
    JSX: true,
  },
  extends: ["eslint:recommended", "next"],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "no-empty": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-constant-condition": "warn",
    "no-useless-escape": "warn"
  }
}
