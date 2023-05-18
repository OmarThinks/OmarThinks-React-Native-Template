import { setTheme, store, themeSelector } from '@redux';
import { darkTheme, lightTheme, useAppTheme } from '@theme';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';

function AppFinal () {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  console.log('Theme', theme);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.appBg
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.appBg} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: colors.appBg
        }}>
        <View
          style={{
            flexGrow: 1,
            alignSelf: 'stretch',
            backgroundColor: colors.appBg
          }}>
          <Text>Hey</Text>
          <Button icon={'camera'} onPress={toggleTheme}>
            Press me
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const AppInsideRNP = () => {
  const theme = useSelector(themeSelector);

  return (
    <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppFinal />
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
