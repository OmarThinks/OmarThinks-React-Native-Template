import { View, Text } from 'react-native';
import React from 'react';
import { useAppTheme } from '@theme';

const AppBar = () => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        height: 50,
        backgroundColor: colors.appBarBg,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <View>
        <Text
          style={{
            color: colors.normalText
          }}>
          AppBar
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color: colors.normalText,
            marginRight: 10
          }}>
          Drawer
        </Text>
        <Text
          style={{
            color: colors.normalText
          }}>
          Theme
        </Text>
      </View>
    </View>
  );
};

export default AppBar;
