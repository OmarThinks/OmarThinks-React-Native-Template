import { MD3DarkTheme as DarkTheme, MD3LightTheme as LightTheme } from 'react-native-paper';

const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export { darkTheme, lightTheme };
