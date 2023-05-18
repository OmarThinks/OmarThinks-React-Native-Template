import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
  useTheme
} from 'react-native-paper';
import { darkColors, lightColors } from './colors';
import { customFonts } from './fonts';

export const lightTheme = {
  ...LightTheme,
  colors: {
    ...lightColors
  },
  fonts: {
    ...customFonts
  }
};

type AppTheme = typeof lightTheme;

export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...darkColors
  },
  fonts: {
    ...customFonts
  }
};

export const useAppTheme = () => useTheme<AppTheme>();
