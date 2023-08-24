import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const Icon = ({
  size,
  color,
  name,
  solid = false,
  light = false,
  brand = false,
  className = '',
}: {
  size: number;
  color: string;
  name: string;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  className?: string;
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
    />
  );
};

export default Icon;
