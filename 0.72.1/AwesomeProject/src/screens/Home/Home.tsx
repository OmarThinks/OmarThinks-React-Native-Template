import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, View} from 'react-native';
import {Button} from 'react-native-paper';
import RNRestart from 'react-native-restart';

const Home = () => {
  const {t} = useTranslation();
  // console.log(i18n.language);

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold">{t('screen.home')}</Text>
      <Button
        onPress={() => {
          //i18n.changeLanguage('ar');
          I18nManager.forceRTL(!I18nManager.isRTL);
          RNRestart.restart();
        }}>
        <Text>{'change language'}</Text>
      </Button>
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home',
  hasBackButton: false,
});
