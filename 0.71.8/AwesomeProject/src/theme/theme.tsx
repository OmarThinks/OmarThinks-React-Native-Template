import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
  useTheme
} from 'react-native-paper';
import { customFonts } from './fonts';

export const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors
  },
  fonts: {
    ...customFonts
  }
};

type AppTheme = typeof lightTheme;

export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors
  },
  fonts: {
    ...customFonts
  }
};

export const useAppTheme = () => useTheme<AppTheme>();
