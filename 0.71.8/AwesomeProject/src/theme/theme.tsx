import { MD3DarkTheme as DarkTheme, MD3LightTheme as LightTheme } from 'react-native-paper';

export const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};
