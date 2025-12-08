import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import a11yPlugin from 'eslint-plugin-jsx-a11y'
import eslintPluginImport from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // Removed recommendedTypeChecked due to monorepo tsconfig issues

  {
    files: ['**/*.js', '**/*.cjs', '**/*.json', '**/*.css', '**/*.md'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      import: eslintPluginImport,
      prettier: prettierPlugin
    },
    rules: {
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'never'],
      'prettier/prettier': ['error', { trailingComma: 'none', semi: false }]
    }
  },

  {
    files: ['**/*.ts', '**/*.tsx', 'vite.config.ts'],

    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true }
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': a11yPlugin,
      import: eslintPluginImport,
      prettier: prettierPlugin
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },

    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'warn',

      semi: ['error', 'never'],
      'import/order': [
        'warn',
        { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }
      ],
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
      // Removed rules that require type checking: floating-promises, strict-boolean-expressions
    }
  },

  {
    ignores: [
      'dist/',
      'node_modules/',
      '.husky/',
      'eslint.config.js',
      'apps/projects/src/projects/**', // Ignore individual project files
      '*.scss',
      '*.css',
      '*.json',
      '*.svg'
    ]
  },

  eslintConfigPrettier
]
