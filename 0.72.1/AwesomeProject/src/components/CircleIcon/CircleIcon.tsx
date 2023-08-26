import {Icon, TouchFiller} from '@components';
import React from 'react';
import {View, ViewStyle} from 'react-native';

const CircleIcon = ({
  size,
  color,
  iconName,

  bgColor = 'transparent',
  className = '',
  onPress,
  borderWidth = 0,
  borderColor,
  iconSize,
  style = {},
}: {
  size: number;
  color: string;
  iconName: string;

  bgColor?: string;
  className?: string;
  onPress?: () => void;
  borderWidth?: number;
  borderColor?: string;
  iconSize?: number;
  style?: ViewStyle;
}) => {
  iconSize ??= size / 2;
  borderColor ??= color;

  return (
    <View
      className={`overflow-hidden justify-center items-center ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth,
        borderColor,
        backgroundColor: bgColor,
        borderRadius: size / 2,
        ...style,
      }}>
      <TouchFiller onPress={onPress} />
      <Icon size={iconSize} name={iconName} color={color} />
    </View>
  );
};

export default CircleIcon;
