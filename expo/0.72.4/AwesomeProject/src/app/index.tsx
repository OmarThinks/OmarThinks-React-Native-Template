import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";

const SplashScreen = () => {
  return (
    <View>
      <Text>Hi</Text>
      <Button
        onPress={() => {
          router.replace("/home/");
        }}
      >
        <Text>Hey</Text>
      </Button>
    </View>
  );
};

export default SplashScreen;
