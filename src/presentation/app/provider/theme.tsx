import { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme, ThemeType } from '../theme/index';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (themeName: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>(lightTheme);

  useEffect(() => {
    const savedTheme = StorageMMKVAdapter.getItem('theme');
    if (savedTheme === 'dark') {
      setThemeState(darkTheme);
    } else {
      setThemeState(lightTheme);
    }
  }, []);

  const setTheme = (themeName: 'light' | 'dark') => {
    setThemeState(themeName === 'light' ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
