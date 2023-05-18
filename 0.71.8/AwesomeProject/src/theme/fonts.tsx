import { DefaultTheme } from 'react-native-paper';

const fontNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25
] as const;

type FontNumbers = (typeof fontNumbers)[number];

type CustomFonts = {
  [k in FontNumbers as `v${k}`]: {
    fontSize: k;
    fontWeight: 'bold';
  };
} & {
  [k in FontNumbers as `v${k}n`]: {
    fontSize: k;
    fontWeight: 'normal';
  };
};

const additionalFonts = fontNumbers.reduce((acc, value) => {
  // console.log(value);
  // console.log(typeof value);

  acc[`v${value}` as `v${1}`] = {
    fontSize: fontNumbers[value - 1] as 1,
    fontWeight: 'bold'
  };

  acc[`v${value}n` as `v${1}n`] = {
    fontSize: fontNumbers[value - 1] as 1,
    fontWeight: 'normal'
  };

  return acc;
}, {} as CustomFonts);

export const customFonts = {
  ...DefaultTheme.fonts,
  ...additionalFonts
};
