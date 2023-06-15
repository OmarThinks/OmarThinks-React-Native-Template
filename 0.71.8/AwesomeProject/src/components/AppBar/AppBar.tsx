import { setTheme, themeSelector } from '@redux';
import { useAppTheme } from '@theme';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const AppBar = () => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

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
          }}
          onPress={toggleTheme}>
          Theme
        </Text>
      </View>
    </View>
  );
};

export default AppBar;
