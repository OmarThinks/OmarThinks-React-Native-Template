import { View, Text } from 'react-native';
import React from 'react';

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true
  }: {
    isScrollable?: boolean;
  } = {}
) => {
  if (isScrollable) {
    //
  }

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
