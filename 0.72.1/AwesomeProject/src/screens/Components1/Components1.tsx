import {View} from 'react-native';
import React from 'react';
import {Text, TouchFiller, Icon, CircleIcon} from '@components';
import {MainLayout} from '@hoc';

const HR = ({height = 2}: {height?: number}) => {
  return (
    <View
      className="bg-black my-3"
      style={{
        height,
      }}
    />
  );
};

const Header = ({title = 'Title'}: {title: string}) => {
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
      <View>
        <Text variant="v1">v1</Text>
        <Text variant="v1n">v1n</Text>
        <Text variant="v2">v2</Text>
        <Text variant="v2n">v2n</Text>
        <Text variant="v3">v3</Text>
        <Text variant="v3n">v3n</Text>
        <Text variant="v4">v4</Text>
        <Text variant="v4n">v4n</Text>
        <Text variant="v5">v5</Text>
        <Text variant="v5n">v5n</Text>
        <Text variant="v6">v6</Text>
        <Text variant="v6n">v6n</Text>
        <Text variant="v7">v7</Text>
        <Text variant="v7n">v7n</Text>
        <Text variant="v8">v8</Text>
        <Text variant="v8n">v8n</Text>
        <Text variant="v9">v9</Text>
        <Text variant="v9n">v9n</Text>
        <Text variant="v10">v10</Text>
        <Text variant="v10n">v10n</Text>
        <Text variant="v11">v11</Text>
        <Text variant="v11n">v11n</Text>
        <Text variant="v12">v12</Text>
        <Text variant="v12n">v12n</Text>
        <Text variant="v13">v13</Text>
        <Text variant="v13n">v13n</Text>
        <Text variant="v14">v14</Text>
        <Text variant="v14n">v14n</Text>
        <Text variant="v15">v15</Text>
        <Text variant="v15n">v15n</Text>
        <Text variant="v16">v16</Text>
        <Text variant="v16n">v16n</Text>
        <Text variant="v17">v17</Text>
        <Text variant="v17n">v17n</Text>
        <Text variant="v18">v18</Text>
        <Text variant="v18n">v18n</Text>
        <Text variant="v19">v19</Text>
        <Text variant="v19n">v19n</Text>
        <Text variant="v20">v20</Text>
        <Text variant="v20n">v20n</Text>
        <Text variant="v21">v21</Text>
        <Text variant="v21n">v21n</Text>
        <Text variant="v22">v22</Text>
        <Text variant="v22n">v22n</Text>
        <Text variant="v23">v23</Text>
        <Text variant="v23n">v23n</Text>
        <Text variant="v24">v24</Text>
        <Text variant="v24n">v24n</Text>
        <Text variant="v25">v25</Text>
        <Text variant="v25n">v25n</Text>
      </View>

      <Header title="TouchFiller" />
      <View>
        <View className="m-1 rounded-full bg-cyan-300">
          <Text className="m-5">Pressable</Text>
          <TouchFiller className="rounded-full" onPress={() => {}} />
        </View>
        <View className="m-1 rounded-full bg-gray-400">
          <Text className="m-5">Not Pressable</Text>
          <TouchFiller className="rounded-full" />
        </View>
        <View className="m-1 rounded-[20px] bg-gray-400 p-4">
          <Text className="m-5">{"Don't use with padding"}</Text>
          <TouchFiller className="rounded-[20px]" onPress={() => {}} />
        </View>
      </View>

      <Header title="Icon" />

      <Icon size={20} name="comments" color="lime" />
      <Icon size={20} name="comments" color="lime" solid />
      <Icon size={40} name="comments" color="lime" />
      <Icon className="m-5" size={20} name="comments" color="lime" />

      <Header title="CircleIcon" />

      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        onPress={() => {}}
      />
      <CircleIcon size={40} iconName="comments" color={'black'} />
      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        borderWidth={2}
        onPress={() => {}}
      />

      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        borderWidth={2}
        onPress={() => {}}
        bgColor="green"
      />

      <View
        style={{
          alignSelf: 'stretch',
          height: 40,
          backgroundColor: 'red',
          borderRadius: 16,
        }}
        // This works
      />
      <View
        className="self-stretch h-10 bg-red-500 rounded-[16px]"
        // This works
      />
      <View
        className="self-stretch h-10 bg-red-500 rounded-[16]"
        // This doesn't work
      />
    </View>
  );
};

export default MainLayout(Components1, {
  title: 'Components1',
});
