import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    text: {
      primary: string;
      secondary: string;
    };
    checkBox: {
      primary: string;
      secondary: string;
    };
  };
};

const lightTheme: ThemeType = {
  ...DefaultTheme,
  colors: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    checkBox: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    primary: '#696969',
    secondary: '#696969',
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    checkBox: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
  },
};

export { lightTheme, darkTheme };
