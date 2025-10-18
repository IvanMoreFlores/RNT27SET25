import { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../theme/index';
const ThemeContext = createContext<{
  theme?: typeof lightTheme | typeof darkTheme;
  setTheme?: (theme: typeof lightTheme | typeof darkTheme) => void;
}>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<
    typeof lightTheme | typeof darkTheme | undefined
  >(lightTheme);
  return (
    console.log('theme', theme),
    (
      <ThemeContext.Provider
        value={{
          theme: theme as typeof lightTheme | typeof darkTheme | undefined,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  );
};

export { ThemeContext };
