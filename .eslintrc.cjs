const appType = process.env.APP_TYPE || "";
const tsconfigPath = `./src/tsconfig${appType ? `-${appType}` : ""}.json`;
const tsConfig = require(tsconfigPath);

const ignorePatterns = (tsConfig?.exclude ?? []).map(p => {
  if (p.indexOf("../") === 0) return p.slice(3);
  if (p.indexOf("./") === 0) return `src/${p.slice(2)}`;
  return `src/${p}`;
});
if (ignorePatterns.length > 0) {
  process.stdout.write("\n--------------------\n")
  process.stdout.write(`[eslintrc] add ignorePatterns from tsconfig exclude patterns.\n`);
  ignorePatterns.forEach(p => process.stdout.write(`  - ${p}\n`));
  process.stdout.write("--------------------\n")
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
  "extends": [
    "next/core-web-vitals"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": tsconfigPath,
    "sourceType": "module"
  },
  "root": true,
  "ignorePatterns": ignorePatterns,
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          [
            "@",
            "src/components"
          ],
          [
            "~",
            "src/features"
          ],
          [
            "$",
            "src/app"
          ]
        ],
        "extensions": [
          ".json",
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".ts",
          ".tsx",
          ".mts",
          ".cts"
        ]
      }
    }
  },
  "rules": {
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": "first",
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ignoreComments": true
      }
    ],
    "eol-last": [
      "warn",
      "always"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "semi-spacing": [
      "warn",
      {
        "after": true,
        "before": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "func-style": [
      "warn",
      "expression"
    ],
    "array-bracket-spacing": [
      "warn",
      "never",
      {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false
      }
    ],
    "brace-style": "warn",
    "padded-blocks": [
      "warn",
      {
        "blocks": "never",
        "classes": "always"
      }
    ],
    "keyword-spacing": "warn",
    "space-infix-ops": "warn",
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "key-spacing": [
      "warn",
      {
        "singleLine": {
          "beforeColon": false,
          "afterColon": true
        },
        "multiLine": {
          "beforeColon": false,
          "afterColon": true
        }
      }
    ],
    "switch-colon-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": [
      "warn",
      "always"
    ],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "arrow-spacing": "warn",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1
      }
    ],
    "no-var": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-new-func": "error",
    "no-native-reassign": "error",
    "no-trailing-spaces": "warn",
    "no-unused-vars": "off",
    "no-alert": "warn",
    "no-multi-spaces": "warn",
    "no-throw-literal": "error",
    "no-duplicate-case": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "warn",
    "no-unreachable": "warn",
    "no-console": "warn",
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    "vars-on-top": "error",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off"
  }
}