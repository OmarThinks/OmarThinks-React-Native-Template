import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { getStoredTheme } from '@storage';
import { useDispatch } from 'react-redux';
import { setTheme } from '@redux';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const logStoredTheme = async () => {
      const storedTheme = await getStoredTheme();
      console.log('storedTheme', storedTheme);

      if (storedTheme) {
        dispatch(setTheme(storedTheme));
      }

      navigation.replace('Home');
    };

    logStoredTheme();
  }, []);

  return <View />;
};

export default Splash;
