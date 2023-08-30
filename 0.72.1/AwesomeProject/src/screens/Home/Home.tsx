import {Text} from '@components';
import {MainLayout} from '@hoc';
import {switchLanguage} from '@locale';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const Home = () => {
  const {t} = useTranslation();
  // console.log(i18n.language);

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold">{t('screen.home')}</Text>
      <Button
        onPress={() => {
          switchLanguage('ar');
        }}>
        <Text>{'Arabic'}</Text>
      </Button>
      <Button
        onPress={() => {
          switchLanguage('en');
        }}>
        <Text>{'English'}</Text>
      </Button>
      <Button
        onPress={() => {
          switchLanguage('de');
        }}>
        <Text>{'German'}</Text>
      </Button>
    </View>
  );
};

export default () => {
  const {t} = useTranslation();

  return MainLayout(Home, {
    title: t('screen.home'),
    hasBackButton: false,
  });
};
