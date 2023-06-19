import React from 'react';
import { View, ViewStyle } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const TouchFiller = ({ style = {} }: {style?: ViewStyle}) => {
  const borderRadius = style.borderRadius || 0;

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        overflow: 'hidden',
        borderRadius
      }}>
      <TouchableRipple
        style={{
          flexGrow: 1,
          alignSelf: 'stretch'
        }}>
        <View />
      </TouchableRipple>
    </View>
  );
};

export default TouchFiller;
