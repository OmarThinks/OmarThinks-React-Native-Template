import {useAppTheme} from '@theme';
import React from 'react';
import {customText, TextProps} from 'react-native-paper';
import {fontVariants} from 'src/theme/theme';

const TextInner = customText<fontVariants>();

const Text = ({
  children,
  variant,
  className = '',
  style = {},
  ...props
}: TextProps<fontVariants>) => {
  const colors = useAppTheme().colors;

  return (
    <TextInner
      {...props}
      className={className}
      style={[style, {color: colors.normalText}]}
      variant={variant}>
      {children}
    </TextInner>
  );
};

export default Text;
