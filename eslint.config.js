import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1️⃣ Genel önerilenler
  js.configs.recommended,
  react.configs.flat.recommended,

  // 2️⃣ OVERRIDE (EN ALTA!)
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react
    },
    rules: {
      // 🔥 PROP-TYPES KAPALI
      'react/prop-types': 'off',

      // 🔥 React 17+ JSX için
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]);
