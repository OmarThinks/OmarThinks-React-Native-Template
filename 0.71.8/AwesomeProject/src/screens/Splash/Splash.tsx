import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.replace('Home');
  }, []);

  return <View />;
};

export default Splash;
