import { Theme } from '@redux';
import { getData, storeData } from './base';

const themeStorageKey = 'theme';

const getTheme = async () => {
  const theme = (await getData(themeStorageKey)) as Theme | null;
  return theme;
};

const setTheme = async (theme: Theme) => {
  await storeData(themeStorageKey, theme);
};

export { getTheme, setTheme };
