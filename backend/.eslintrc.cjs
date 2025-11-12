module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'node/no-missing-require': ['error', { tryExtensions: ['.js', '.json'] }],
    'node/no-process-exit': 'off',
    'no-process-exit': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

