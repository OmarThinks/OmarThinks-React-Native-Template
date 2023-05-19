import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store, themeSelector } from '@redux';
import { Home, Splash } from '@screens';
import { darkTheme, lightTheme } from '@theme';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { getStoredTheme } from './storage/theme';

const Stack = createNativeStackNavigator();

const AppWithoutRedux = () => {
  const theme = useSelector(themeSelector);

  React.useEffect(() => {
    const logStoredTheme = async () => {
      const storedTheme = await getStoredTheme();
      console.log('storedTheme', storedTheme);

      return await getStoredTheme();
    };

    logStoredTheme();
  }, []);

  return (
    <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppWithoutRedux />
    </ReduxProvider>
  );
};

export default App;
