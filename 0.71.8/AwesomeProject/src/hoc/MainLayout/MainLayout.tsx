import { View, Text } from 'react-native';
import React from 'react';

const MainLayout = (
  ScreenComponent: React.FC,
  {
    scrollable = true
  }: {
    scrollable?: boolean;
  }
) => {
  const InnerMainLayout = () => {
    return (
      <View>
        <Text>MainLayout</Text>
        <ScreenComponent />
      </View>
    );
  };

  return InnerMainLayout;
};

export default MainLayout;

/*
I want MainLayout to be used like this:

return MainLayout(Home, {})

*/
