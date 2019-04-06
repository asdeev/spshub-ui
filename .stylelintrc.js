module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's', '%', 'deg'],
    'scss/selector-no-redundant-nesting-selector': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning'
      }
    ]
  }
};
