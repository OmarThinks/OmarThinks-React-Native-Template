import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

const SplashScreen = () => {
  return (
    <View>
      <Text>Hi</Text>
      <Link href={"/home/"} replace>
        <Button>
          <Text>Hey</Text>
        </Button>
      </Link>
    </View>
  );
};

export default SplashScreen;
