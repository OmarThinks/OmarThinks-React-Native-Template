import { View, Text } from 'react-native';
import React from 'react';
import { useAppTheme } from '@theme';

const AppBar = () => {
  const colors = useAppTheme().colors;

  return (
    <View style={{ height: 50, backgroundColor: 'red' }}>
      <Text>AppBar</Text>
    </View>
  );
};

export default AppBar;
