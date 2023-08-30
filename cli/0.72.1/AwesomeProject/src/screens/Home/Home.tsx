import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

const Home = () => {
  const {t} = useTranslation();
  // console.log(i18n.language);

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold text-[30px]">
        {t('screen.home')}
      </Text>
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
