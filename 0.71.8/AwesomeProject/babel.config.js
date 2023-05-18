module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel']
    }
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@theme': './src/theme/index.tsx'
          // '@app': './src/App.tsx' (Only if needed)
        }
      }
    ]
  ]
}
