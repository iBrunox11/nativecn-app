module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'no-undef': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
