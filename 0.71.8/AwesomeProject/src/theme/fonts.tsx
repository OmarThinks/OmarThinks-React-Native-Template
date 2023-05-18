/* import { DefaultTheme } from 'react-native-paper';

const fontNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25
] as const;

// type =  1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25
type FontNumbers = (typeof fontNumbers)[number];

const _customFonts = Object.keys(fontNumbers).reduce(
  (acc, key) => {
    acc['v' + key] = {
      fontSize: fontNumbers[key] as FontNumbers,
      fontWeight: 'bold'
    };
    acc['v' + key + 'n'] = {
      fontSize: fontNumbers[key] as FontNumbers,
      fontWeight: 'normal'
    };

    return acc;
  },
  {} as {
    [key: string]: {
      fontSize: FontNumbers;
      fontWeight: 'normal' | 'bold';
    };
  }
);

/*
  [font in FontNumbers]: {
    fontSize: font;
    fontWeight: 'bold' | 'normal';
  };

*/
/*
// type ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
// "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24, "25"]
type FontNumbersStrings = (typeof fontNumbers)[number];

type CustomFonts = {
  [font in FontNumbers]: {
    fontSize: font;
    fontWeight: 'bold';
  };
};

export const __customFonts = fontNumbers.reduce(
  (acc, value) => {
    console.log(value);
    console.log(typeof value);
    acc['v' + value] = {
      fontSize: fontNumbers[value - 1],
      fontWeight: 'bold'
    };

    acc['v' + value + 'n'] = {
      fontSize: fontNumbers[value - 1],
      fontWeight: 'normal'
    };

    return acc;
  },
  {} as {
    [key: string]: {
      fontSize: FontNumbers;
      fontWeight: 'normal' | 'bold';
    };
  }
);

console.log(__customFonts);

const customFonts: {
  [key: string]: {
    fontSize: FontNumbers;
    fontWeight: 'normal' | 'bold';
  };
} = {
  v1: {
    fontSize: 1,
    fontWeight: 'bold'
  },
  v1n: {
    fontSize: 1,
    fontWeight: 'normal'
  },
  v2: {
    fontSize: 2,
    fontWeight: 'bold'
  },
  v2n: {
    fontSize: 2,
    fontWeight: 'normal'
  },
  v3: {
    fontSize: 3,
    fontWeight: 'bold'
  },
  v3n: {
    fontSize: 3,
    fontWeight: 'normal'
  },
  v4: {
    fontSize: 4,
    fontWeight: 'bold'
  },
  v4n: {
    fontSize: 4,
    fontWeight: 'normal'
  },
  v5: {
    fontSize: 5,
    fontWeight: 'bold'
  },
  v5n: {
    fontSize: 5,
    fontWeight: 'normal'
  },
  v6: {
    fontSize: 6,
    fontWeight: 'bold'
  },
  v6n: {
    fontSize: 6,
    fontWeight: 'normal'
  },
  v7: {
    fontSize: 7,
    fontWeight: 'bold'
  },
  v7n: {
    fontSize: 7,
    fontWeight: 'normal'
  },
  v8: {
    fontSize: 8,
    fontWeight: 'bold'
  },
  v8n: {
    fontSize: 8,
    fontWeight: 'normal'
  },
  v9: {
    fontSize: 9,
    fontWeight: 'bold'
  },
  v9n: {
    fontSize: 9,
    fontWeight: 'normal'
  },
  v10: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  v10n: {
    fontSize: 10,
    fontWeight: 'normal'
  },
  v11: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  v11n: {
    fontSize: 11,
    fontWeight: 'normal'
  },
  v12: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  v12n: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  v13: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  v13n: {
    fontSize: 13,
    fontWeight: 'normal'
  },
  v14: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  v14n: {
    fontSize: 14,
    fontWeight: 'normal'
  },
  v15: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  v15n: {
    fontSize: 15,
    fontWeight: 'normal'
  },
  v16: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  v16n: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  v17: {
    fontSize: 17,
    fontWeight: 'bold'
  }
};

const fonts = {
  ...DefaultTheme.fonts,
  ...customFonts
};

*/
/*
type a = 'a' | 'b' | 1;

type b = `${a} hey`;

type c = {
  [key in b]: {};
};

const fontNumbers = [
  1, 2, 3, 4, 5, 6
  // 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
] as const;

type FontNumbers = (typeof fontNumbers)[number];

type _b = `v${FontNumbers}` | `v${FontNumbers}n`;

type CustomFonts = {
  [k in _b]: {
    fontSize: number;
    fontWeight: 'bold' | 'normal';
  };
};
*/

type a = 'a' | 'b' | 1;

type b = `${a} hey`;

type c = {
  [key in b]: {};
};

const fontNumbers = [
  1, 2
  // 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
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

export const customFonts: CustomFonts = {
  v1: {
    fontSize: 1,
    fontWeight: 'bold'
  },
  v2: {
    fontSize: 2,
    fontWeight: 'bold'
  },
  v1n: {
    fontSize: 1,
    fontWeight: 'normal'
  },
  v2n: {
    fontSize: 2,
    fontWeight: 'normal'
  }
  // b: 'hey'
};
