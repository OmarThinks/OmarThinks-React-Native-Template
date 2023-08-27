import {styled} from 'nativewind';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  onPress,
  zIndex = 1,
  borderRadius = 0,
  style = {},
}: {
  onPress?: () => void;
  zIndex?: number;
  borderRadius?: number;
  style?: ViewStyle;
}) => {
  return (
    <View
      className={'overflow-hidden absolute h-full w-full'}
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

export default styled(TouchFiller);
