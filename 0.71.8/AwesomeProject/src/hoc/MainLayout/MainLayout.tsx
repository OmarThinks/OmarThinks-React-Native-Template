import { AppBar as AppBarOriginal } from '@components';
import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useAppTheme } from '@theme';
import { useSelector } from 'react-redux';
import { themeSelector } from '@redux';

const AppBar = () => <AppBarOriginal />;

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true,
    hasAppBar = true
  }: {
    isScrollable?: boolean;
    hasAppBar?: boolean;
  } = {}
) => {
  const InnerMainLayout = () => {
    const appBar = hasAppBar && <AppBar />;
    const colors = useAppTheme().colors;
    const theme = useSelector(themeSelector);

    if (isScrollable) {
      console.log('Hey bro');
      return (
        <SafeAreaView
          style={{
            backgroundColor: 'blue',
            minHeight: '100%'
          }}>
          <StatusBar
            barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            backgroundColor={colors.appBg}
          />
          {appBar}
          <ScrollView
            style={{
              flexGrow: 1,
              // flexShrink: 1,
              // minHeight: '100%',
              backgroundColor: 'red'
            }}
            contentContainerStyle={{
              flexGrow: 1
              // flexShrink: 1
              // minHeight: '100%'
            }}>
            <ScreenComponent />
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <View>
        {appBar}
        <ScreenComponent />
      </View>
    );
  };

  return InnerMainLayout;
};

export default MainLayout;

/*
I want MainLayout to be used like this:

return MainLayout(Home, {})

*/
