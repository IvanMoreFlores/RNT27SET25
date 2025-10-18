export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const lightTheme: ThemeType = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
  },
};

const darkTheme = {
  colors: {
    primary: '#000000',
    secondary: '#000000',
  },
};

export { lightTheme, darkTheme };
