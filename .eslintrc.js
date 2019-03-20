module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: [
    "filenames",
    "react-hooks"
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "filenames/no-index": "error",
    "filenames/match-exported": "error",
    "function-paren-newline": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      ignoreRestSiblings: true,
      varsIgnorePattern: "^_",
    }],
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": ["warning", { extensions: [".js"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
