import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  className = '',
  onPress,
  zIndex = 1,
  borderRadius = 0,
}: {
  className?: string;
  onPress?: () => void;
  zIndex?: number;
  borderRadius?: number;
}) => {
  return (
    <View
      className={`overflow-hidden absolute h-full w-full ${className}`}
      style={{
        borderRadius,
        zIndex,
      }}>
      <TouchableRipple className="grow self-stretch" onPress={onPress}>
        <View />
      </TouchableRipple>
    </View>
  );
};

export default TouchFiller;
