import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Authprovider from "@/provider/Authprovider";
import Toast from "react-native-toast-message";
import { ConfirmationProvider } from "@/provider/ConfirmationProvider";
import TopHeader from "@/components/layout/TopHeader";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
    MulishRegular: require("../assets/fonts/Mulish-Regular.ttf"),
    MulishMedium: require("../assets/fonts/Mulish-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ConfirmationProvider>
        <Authprovider>
          <GestureHandlerRootView>
            <SafeAreaView />
            <Toast />
            <Stack>
              <Stack.Screen name="(task)" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="signup" options={{ headerShown: false }} />
              <Stack.Screen
                name="forgotpassword"
                options={{
                  headerShown: true,
                  header: (props) => (
                    <TopHeader
                      {...props}
                      style={{ backgroundColor: "white" }}
                      iconColor={"black"}
                    />
                  ),
                }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </GestureHandlerRootView>
        </Authprovider>
      </ConfirmationProvider>
    </ThemeProvider>
  );
}
