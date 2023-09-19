import { AppBar as AppBarOriginal } from "@components";
import { themeSelector } from "@redux";
import { useAppTheme } from "@theme";
import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";

const AppBar = ({ title }: { title?: string }) => (
  <AppBarOriginal title={title} />
);

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true,
    hasAppBar = true,
    title = "",
    hzPadding = 15,
    vrPadding = 15,
  }: {
    isScrollable?: boolean;
    hasAppBar?: boolean;
    title?: string;
    hzPadding?: number;
    vrPadding?: number;
  } = {}
) => {
  const appBar = hasAppBar && <AppBar title={title} />;
  const colors = useAppTheme().colors;
  const theme = useSelector(themeSelector);

  if (isScrollable) {
    return (
      <View
        className="self-stretch grow"
        style={{ height: "100%", backgroundColor: colors.appBg }}
      >
        <StatusBar
          barStyle={theme === "light" ? "dark-content" : "light-content"}
          backgroundColor={colors.appBg}
        />
        {appBar}
        <ScrollView
          style={{
            flexGrow: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              marginHorizontal: hzPadding,
              marginVertical: vrPadding,
              flexGrow: 1,
              alignSelf: "stretch",
              //backgroundColor: "red",
            }}
          >
            <ScreenComponent />
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: "stretch",
        height: "100%",
        backgroundColor: colors.appBg,
      }}
    >
      {appBar}
      <View
        style={{
          flexGrow: 1,
          alignSelf: "stretch",
          marginHorizontal: hzPadding,
          marginVertical: vrPadding,
        }}
      >
        <ScreenComponent />
      </View>
    </View>
  );
};

export default MainLayout;
