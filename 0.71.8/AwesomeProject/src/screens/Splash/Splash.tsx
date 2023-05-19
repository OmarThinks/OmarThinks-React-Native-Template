import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { getStoredTheme } from '@storage';
import { useDispatch } from 'react-redux';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
