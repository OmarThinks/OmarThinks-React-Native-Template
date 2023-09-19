import FontAwesome from "@expo/vector-icons/FontAwesome";
import "@locale";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { store, themeSelector } from "@redux";
import { darkTheme, lightTheme } from "@theme";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeLanguage } from "@locale";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { setTheme } from "@redux";
import { AnyAction } from "@reduxjs/toolkit";
import { getStoredTheme } from "@storage";
import React, { Dispatch } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const initializeTheme = async (dispatch: Dispatch<AnyAction>) => {
  const storedTheme = await getStoredTheme();
  dispatch(setTheme(storedTheme));
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (loaded) {
    return <RootLayoutNav />;
  }

  return null;
}

const RootLayoutNav1 = () => {
  const colorScheme = useColorScheme();
  const theme = useSelector(themeSelector);

  const dispatch = useDispatch();

  const [isReady1, setIsReady1] = React.useState(false);
  const [isReady2, setIsReady2] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  console.log(initialized, "initialized");
  console.log(isReady1, "isReady1");
  console.log(isReady2, "isReady2");

  React.useEffect(() => {
    initializeLanguage()
      .catch(() => {})
      .finally(() => {
        setIsReady1(true);
      });

    initializeTheme(dispatch)
      .catch(() => {})
      .finally(() => {
        setIsReady2(true);
      });
  }, [dispatch]);

  React.useEffect(() => {
    if (isReady1 && isReady2) {
      setInitialized(true);
    }
  }, [isReady1, isReady2]);

  if (isReady1 && isReady2 && initialized) {
    console.log("should return screen now");
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <PaperProvider theme={theme === "light" ? lightTheme : darkTheme}>
          {/*<Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>*/}
          <SafeAreaView>
            <Slot />
          </SafeAreaView>
        </PaperProvider>
      </ThemeProvider>
    );
  }

  return null;
};

function RootLayoutNav() {
  return (
    <ReduxProvider store={store}>
      <RootLayoutNav1 />
    </ReduxProvider>
  );
}
