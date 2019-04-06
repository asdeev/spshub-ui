module.exports = {
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@',
            rootPathSuffix: 'src'
          },
          {
            rootPathPrefix: '#',
            rootPathSuffix: 'public'
          }
        ]
      }
    ]
  ],
  presets: ['@babel/preset-env']
};
