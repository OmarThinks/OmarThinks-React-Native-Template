import React from 'react';
import {ViewStyle} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const Icon = ({
  size,
  color,
  name,
  solid = false,
  light = false,
  brand = false,
  _className = '',
  style = {},
}: {
  size: number;
  color: string;
  name: string;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  _className?: string;
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
      className={_className}
      style={style}
    />
  );
};

export default Icon;
