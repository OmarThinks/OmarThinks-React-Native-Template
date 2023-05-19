import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { getStoredTheme } from '@storage';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const logStoredTheme = async () => {
      const storedTheme = await getStoredTheme();
      console.log('storedTheme', storedTheme);

      navigation.replace('Home');
    };

    logStoredTheme();
  }, []);

  return <View />;
};

export default Splash;
