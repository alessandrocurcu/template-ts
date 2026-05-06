import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  ignores: ['docs/**'],
}, {
  rules: {
    'no-console': 'warn',
  },
});
