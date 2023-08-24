import {Text} from '@components';
import {setTheme, themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const AppBar = ({title}: {title?: string}) => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <View
      className="h-[50] px-2 flex-row items-center justify-between self-stretch"
      style={{backgroundColor: colors.appBarBg}}>
      <View className="flex-row grow shrink mr-5">
        <Text
          className="shrink"
          style={{color: colors.normalText}}
          variant="v20"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View className="flex-row">
        <Text
          className="mr-2"
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}>
          Components 1
        </Text>
        <Text className="mr-2" onPress={toggleTheme}>
          Theme
        </Text>
        <Text style={{}}>Drawer</Text>
      </View>
    </View>
  );
};

export default AppBar;
