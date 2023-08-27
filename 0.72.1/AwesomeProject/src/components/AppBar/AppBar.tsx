import {CircleIcon, Text} from '@components';
import {setTheme, themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, Portal, Button, PaperProvider} from 'react-native-paper';

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

  const [modalVisible, setModalVisible] = React.useState(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View
      className="h-[50] px-2 flex-row items-center justify-between self-stretch"
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
            className="mr-1"
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
              setModalVisible(true);
            } catch (error) {}
          }}
          className="ml-1.5"
        />

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            contentContainerStyle={containerStyle}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
      </View>
    </View>
  );
};

export default AppBar;
