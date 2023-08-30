import {Text} from '@components';
import {MainLayout} from '@hoc';
import {switchLanguage} from '@locale';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const Language = () => {
  const {t} = useTranslation();

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text className="justify-center font-bold">{t('language')}</Text>
      <Button
        onPress={() => {
          switchLanguage('ar');
        }}>
        <Text>{'العربية'}</Text>
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
        <Text>{'Deutsch'}</Text>
      </Button>
    </View>
  );
};

/*
export default MainLayout(Language, {
  title: 'Languages',
  hasBackButton: false,
});
*/

export default () => {
  const {t} = useTranslation();

  return MainLayout(Language, {
    title: t('language'),
    hasBackButton: true,
  });
};
