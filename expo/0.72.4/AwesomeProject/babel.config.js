module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./src/components/index.tsx",
            "@hoc": "./src/hoc/index.tsx",
            "@redux": "./src/redux/index.tsx",
            "@storage": "./src/storage/index.tsx",
            "@theme": "./src/theme/index.tsx",
            "@locale": "./src/locale/index.tsx",

            //"@screens": "./src/screens/index.tsx",
            //"@navigation": "./src/navigation/index.tsx",
            // '@app': './src/App.tsx' (Only if needed)
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
