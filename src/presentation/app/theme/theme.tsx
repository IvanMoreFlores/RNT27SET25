import { createContext } from 'react';
import { lightTheme, ThemeType } from './index';

const ThemeContext = createContext<{
  theme?: ThemeType;
  setTheme?: (theme: string) => void;
}>({
  theme: lightTheme,
  setTheme: () => {},
});

export { ThemeContext };
