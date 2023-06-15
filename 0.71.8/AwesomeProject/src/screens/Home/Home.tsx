import { MainLayout } from '@hoc';
import { setTheme, themeSelector } from '@redux';
import { useAppTheme } from '@theme';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  // console.log('Theme', theme);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.appBg
      }}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.appBg}
      />
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
};

export default MainLayout(Home);
