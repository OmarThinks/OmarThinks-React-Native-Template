import React from 'react';
import {customText, TextProps} from 'react-native-paper';
import {fontVariants} from 'src/theme/theme';
import {useAppTheme} from '@theme';
import {ViewStyle} from 'react-native';

const TextInner = customText<fontVariants>();

const Text = ({
  children,
  variant,
  className = '',
  ...props
}: TextProps<fontVariants>) => {
  const colors = useAppTheme().colors;

  return (
    <TextInner
      {...props}
      className={className}
      style={[{color: colors.normalText}]}
      variant={variant}>
      {children}
    </TextInner>
  );
};

export default Text;
