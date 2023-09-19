import { Text } from "@components";
import { MainLayout } from "@hoc";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const Home = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center grow">
      <Text variant="v25" className="text-center">
        {t("screen.home")}
      </Text>
    </View>
  );
};

export default () => {
  const { t } = useTranslation();

  return MainLayout(Home, {
    title: t("screen.home"),
  });
};
