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

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const RootLayoutNav1 = () => {
  const colorScheme = useColorScheme();
  const theme = useSelector(themeSelector);

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
};

function RootLayoutNav() {
  return (
    <ReduxProvider store={store}>
      <RootLayoutNav1 />
    </ReduxProvider>
  );
}
