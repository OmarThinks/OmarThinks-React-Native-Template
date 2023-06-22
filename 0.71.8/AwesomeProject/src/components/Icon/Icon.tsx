import { View } from 'react-native';
import React from 'react';
import { Text } from '@components';

import FAIcon from 'react-native-vector-icons/FontAwesome';

const Icon = () => {
  return (
    <View>
      <Text>Icon</Text>
      <FAIcon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default Icon;
