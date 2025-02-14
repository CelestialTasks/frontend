import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
// TODO: Add tailwindcss plugin when it updates to support Tailwind 4
// import tailwindcss from "eslint-plugin-tailwindcss";
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'

export default [
  // ============== Basic ESLint Settings ==============
  {
    ignores: ['build', 'node_modules', 'android', 'ios'],
  },

  // ============== Import Sorting Config ==============
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // Packages: react related packages come first, then other packages.
            ['^react$', '^@?\\w'],
            // Absolute imports and other imports.
            ['^'],
            // Relative imports.
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  // ============== Base JavaScript Config ==============
  {
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // ============== TypeScript Config ==============
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // ============== React + JSX Config ==============
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      ...jsxA11yPlugin.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
    },
  },

  // ============== Tailwind CSS Plugin Config ==============
  // {
  //   // TODO: Add tailwindcss plugin when it updates to support Tailwind 4
  //   plugins: {
  //     tailwindcss,
  //   },
  //   rules: {
  //     "tailwindcss/classnames-order": "warn",
  //     "tailwindcss/no-custom-classname": "off",
  //   },
  // },

  // ============== Prettier Integration ==============
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
    },
  },

  // ============== Other ==============
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        window: 'readonly',
        Audio: 'readonly',
        requestAnimationFrame: 'readonly',
        document: 'readonly',
        __dirname: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        atob: 'readonly',
        console: 'readonly',
        location: 'readonly',
        setTimeout: 'readonly',
        NodeJS: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        setInterval: 'readonly',
        fetch: 'readonly',
        Image: 'readonly',
        cancelAnimationFrame: 'readonly',
      },
    },
  },
  eslintConfigPrettier,
]
