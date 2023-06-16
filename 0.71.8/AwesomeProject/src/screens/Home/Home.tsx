import { Text } from '@components';
import { MainLayout } from '@hoc';
import { themeSelector } from '@redux';
import { useAppTheme } from '@theme';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
  const colors = useAppTheme().colors;
  const theme = useSelector(themeSelector);

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1000
      }}>
      <Text variant="v16">Hey</Text>
    </View>
  );
};

export default MainLayout(Home);
