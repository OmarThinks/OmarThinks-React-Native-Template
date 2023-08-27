import {useAppTheme} from '@theme';
import {styled} from 'nativewind';
import React from 'react';
import {customText, TextProps} from 'react-native-paper';
import {fontVariants} from 'src/theme/theme';

const TextInner = customText<fontVariants>();

const Text = ({
  children,
  variant,
  style = {},
  ...props
}: TextProps<fontVariants>) => {
  const colors = useAppTheme().colors;

  //console.log('Text');
  //console.log('style:  ' + JSON.stringify(style));

  return (
    <TextInner
      {...props}
      style={[style, {color: colors.normalText}]}
      variant={variant}>
      {children}
    </TextInner>
  );
};

export default styled(Text);
