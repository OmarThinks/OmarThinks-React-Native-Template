import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash } from '@screens';

// https://reactnavigation.org/docs/typescript/

export const navigationNames = {
  Home: 'Home',
  Splash: 'Splash'
} as const;

export type RootStackParamList = {
  [navigationNames.Home]: undefined;
  [navigationNames.Splash]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={navigationNames.Splash} component={Splash} />
    <Stack.Screen name={navigationNames.Home} component={Home} />
  </Stack.Navigator>
);
