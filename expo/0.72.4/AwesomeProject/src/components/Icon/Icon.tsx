import { FontAwesome5 } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { ViewStyle } from "react-native";

const Icon = ({
  size,
  color,
  name,
  solid = false,
  light = false,
  brand = false,
  style = {},
}: {
  size: number;
  color: string;
  name: string;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  style?: ViewStyle;
}) => {
  return (
    <FontAwesome5
      name={name}
      size={size}
      color={color}
      solid={solid}
      light={light}
      brand={brand}
      style={style}
    />
  );
};

export default styled(Icon);
