import Navigator from './navigate/navigator';

import './i18'; // Inicializar i18n
import { LanguageProvider } from './provider/language';
import { ThemeProvider } from './provider/theme';
// import DrawerNavigator from './navigate/drawer';
// import TabNavigator from './navigate/tab';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigator />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
