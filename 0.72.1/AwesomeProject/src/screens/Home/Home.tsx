import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

const Home = () => {
  const a = 'p-5';

  const {t, i18n} = useTranslation();
  // console.log(i18n.language);

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold">{t('screen.home')}</Text>
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home',
  hasBackButton: false,
});
