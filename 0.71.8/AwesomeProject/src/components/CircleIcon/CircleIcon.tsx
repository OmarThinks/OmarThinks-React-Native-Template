import { Icon, TouchFiller } from '@components';
import React from 'react';
import { View } from 'react-native';

const CircleIcon = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <TouchFiller onPress={() => {}} />
      <Icon size={20} name="comments" color="black" />
    </View>
  );
};

export default CircleIcon;
