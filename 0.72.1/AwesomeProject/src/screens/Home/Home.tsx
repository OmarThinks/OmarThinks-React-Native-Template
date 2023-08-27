import {CircleIcon, Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';

const Home = () => {
  const a = 'p-5';

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text variant="v16">Hey</Text>
      <View className="self-stretch h-[100] bg-red-600" />

      <Text className="justify-center font-bold">Hey</Text>
      <Text className={`bg-green-500 ${a}`}>Hey</Text>
      <Text className="mt-5 bg-slate-600">Hi</Text>
      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        borderWidth={2}
        onPress={() => {}}
        //style={{marginTop: 200}}
        className="mt-5"
      />
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home',
});
