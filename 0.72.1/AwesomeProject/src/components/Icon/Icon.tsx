import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {ViewStyle} from 'react-native';

const Icon = ({
  size,
  color,
  name,
  solid = false,
  light = false,
  brand = false,
  className = '',
  style = {},
}: {
  size: number;
  color: string;
  name: string;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  className?: string;
  style?: ViewStyle;
}) => {
  return (
    <FAIcon
      name={name}
      size={size}
      color={color}
      solid={solid}
      light={light}
      brand={brand}
      className={className}
      style={style}
    />
  );
};

export default Icon;
