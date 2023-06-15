import React from 'react';
import { View } from 'react-native';
import { AppBar } from '@c';

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
        <AppBar />
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
