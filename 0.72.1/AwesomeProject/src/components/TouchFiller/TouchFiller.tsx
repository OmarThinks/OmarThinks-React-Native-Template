import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  _className = '',
  onPress,
  zIndex = 1,
  borderRadius = 0,
  style = {},
}: {
  _className?: string;
  onPress?: () => void;
  zIndex?: number;
  borderRadius?: number;
  style?: ViewStyle;
}) => {
  console.log('cn: ' + _className);

  return (
    <View
      className={`overflow-hidden absolute h-full w-full ${_className}`}
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
