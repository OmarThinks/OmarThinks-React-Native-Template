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
          '@theme': './src/theme/index.tsx',
          '@redux': './src/redux/index.tsx',
          '@screens': './src/screens/index.tsx'
          // '@app': './src/App.tsx' (Only if needed)
        }
      }
    ]
  ]
};
