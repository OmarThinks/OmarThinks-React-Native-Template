import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  className = '',
  onPress,
  zIndex = 1,
  borderRadius = 0,
  style = {},
}: {
  className?: string;
  onPress?: () => void;
  zIndex?: number;
  borderRadius?: number;
  style?: ViewStyle;
}) => {
  return (
    <View
      className={`overflow-hidden absolute h-full w-full ${className}`}
      style={{
        borderRadius,
        zIndex,
        ...style,
      }}>
      <TouchableRipple className="grow self-stretch" onPress={onPress}>
        <View />
      </TouchableRipple>
    </View>
  );
};

export default TouchFiller;
