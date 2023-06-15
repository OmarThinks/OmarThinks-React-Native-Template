import { MainLayout } from '@hoc';
import { themeSelector } from '@redux';
import { useAppTheme } from '@theme';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
  const colors = useAppTheme().colors;
  const theme = useSelector(themeSelector);

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout(Home);
