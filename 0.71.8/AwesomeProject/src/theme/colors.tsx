import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  appBg: '#ffffff'
};

type themeColors = typeof lightColors;

const darkColors: themeColors = {
  ...DarkTheme.colors,

  appBg: '#000000'
};

export { darkColors, lightColors };
