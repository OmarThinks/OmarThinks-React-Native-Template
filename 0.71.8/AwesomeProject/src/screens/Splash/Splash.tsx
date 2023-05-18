import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.replace('Home');
  }, []);

  return <View />;
};

export default Splash;
