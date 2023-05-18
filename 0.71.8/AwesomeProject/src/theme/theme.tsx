import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
  useTheme
} from 'react-native-paper';
import { __customFonts } from './fonts';

export const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors
  }
};

console.log(__customFonts);

type AppTheme = typeof lightTheme;

export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors
  }
};

export const useAppTheme = () => useTheme<AppTheme>();
