import { View } from 'react-native';
import React from 'react';
import { Text } from '@components';
import { MainLayout } from '@hoc';

const HR = ({ height = 2 }: {height?: number}) => {
  return (
    <View
      style={{
        height,
        backgroundColor: 'black',
        marginVertical: 10
      }}
    />
  );
};

const Header = ({ title = 'Title' }: {title: string}) => {
  return (
    <View>
      <HR height={4} />
      <Text variant="v25">{title}</Text>
      <HR height={1} />
    </View>
  );
};

const Components1 = () => {
  return (
    <View>
      <Header title="Text" />
      <Text>Components1</Text>
    </View>
  );
};

export default MainLayout(Components1, {
  title: 'Components1'
});
