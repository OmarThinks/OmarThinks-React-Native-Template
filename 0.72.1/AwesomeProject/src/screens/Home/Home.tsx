import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, View} from 'react-native';
import {Button} from 'react-native-paper';
import RNRestart from 'react-native-restart';
import i18n, {switchLanguage} from '@locale';

const Home = () => {
  const {t} = useTranslation();
  // console.log(i18n.language);

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold">{t('screen.home')}</Text>
      <Button
        onPress={() => {
          switchLanguage('ar');
          i18n.changeLanguage('ar');
        }}>
        <Text>{'Arabic'}</Text>
      </Button>
      <Button
        onPress={() => {
          switchLanguage('en');
          i18n.changeLanguage('en');
        }}>
        <Text>{'English'}</Text>
      </Button>
      <Button
        onPress={() => {
          switchLanguage('de');
          i18n.changeLanguage('de');
        }}>
        <Text>{'German'}</Text>
      </Button>
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home',
  hasBackButton: false,
});
