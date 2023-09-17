import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { ViewStyle } from "react-native";
import { FAIconType } from "./FAIconType";

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
  name: FAIconType;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  style?: ViewStyle;
}) => {
  return (
    <FontAwesome
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
