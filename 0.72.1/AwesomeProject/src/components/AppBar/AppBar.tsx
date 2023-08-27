import {CircleIcon, Text} from '@components';
import {setTheme, themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const AppBar = ({
  title,
  hasBackButton,
}: {
  title?: string;
  hasBackButton: boolean;
}) => {
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
      className="h-[50] px-2.5 flex-row items-center justify-between self-stretch"
      style={{backgroundColor: colors.appBarBg}}>
      <View className="flex-row grow shrink mr-5 items-center self-stretch">
        {hasBackButton && (
          <CircleIcon
            size={40}
            iconName="arrow-left"
            color={colors.normalText}
            borderWidth={2}
            onPress={() => {
              try {
                navigation.goBack();
              } catch (error) {}
            }}
            className="mr-2"
          />
        )}

        <Text
          className="shrink"
          style={{color: colors.normalText}}
          variant="v20"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View className="flex-row items-center">
        <CircleIcon
          size={40}
          iconName={'sitemap'}
          color={colors.normalText}
          borderWidth={2}
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}
          className="ml-1.5"
        />

        <CircleIcon
          size={40}
          iconName={theme === 'light' ? 'moon' : 'sun'}
          color={colors.normalText}
          borderWidth={2}
          onPress={toggleTheme}
          className="ml-1.5"
        />

        <CircleIcon
          size={40}
          iconName="bars"
          color={colors.normalText}
          borderWidth={2}
          onPress={() => {
            try {
              // What to do?
            } catch (error) {}
          }}
          className="ml-1.5"
        />
      </View>
    </View>
  );
};

export default AppBar;
