import { View } from 'react-native';
import React from 'react';
import { Text } from '@components';
import { MainLayout } from '@hoc';

const Components1 = () => {
  return (
    <View>
      <Text>Components1</Text>
    </View>
  );
};

export default MainLayout(Components1);
