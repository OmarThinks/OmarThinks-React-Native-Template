import { Text } from '@components';
import { MainLayout } from '@hoc';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text variant="v16">Hey</Text>
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home'
});
