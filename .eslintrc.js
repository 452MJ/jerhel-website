module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  globals: {
    global: true,
    $styles: true,
    $colors: true,
    $http: true,
    apx: true,
  },
  rules: {
    'react-native/no-inline-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-access-state-in-setstate': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-multi-assign': 'off',
    'no-return-assign': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off',
    radix: 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    semi: [2, 'never'],
    'jsx-a11y/label-has-for': 'off',
    camelcase: [
      1,
      {
        properties: 'always',
      },
    ],
    'react/forbid-prop-types': [
      0,
      {
        forbid: 'object',
      },
    ],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'warn',
    'react/state-in-constructor': ['off'],
    'react/static-property-placement': ['warn'],
    'prefer-destructuring': 'off',
    // "import/no-extraneous-dependencies":["error", {"devDependencies":true}]
  },
}
