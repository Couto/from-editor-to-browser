module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:flowtype/recommended",
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "compat"
  ],
  "rules": {
    "compat/compat": 2
  }
};
