import { store, themeSelector } from '@redux';
import { darkTheme, lightTheme } from '@theme';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { Home } from '@screens';

const AppInsideRNP = () => {
  const theme = useSelector(themeSelector);

  return (
    <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Home />
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppInsideRNP />
    </ReduxProvider>
  );
};

export default App;
