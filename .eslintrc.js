module.exports = {
  extends: ['airbnb', '@mate-academy/eslint-config', "eslint:recommended", "plugin:react/recommended"], 
  env: {
    browser: true,
    es6: true
  },
  "parser": "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    "ecmaVersion": 6,
    "ecmaFeatures": {
    "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
        "react"
    ],
  globals: {
    it: false
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }
};