import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    // You can add custom fonts here if needed
    // 'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
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

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="core-components"
        options={{
          title: "Core Components",
          headerBackTitle: "Learn",
          headerTintColor: "#2196F3",
        }}
      />
      <Stack.Screen
        name="layout-styling"
        options={{
          title: "Layout & Styling",
          headerBackTitle: "Learn",
          headerTintColor: "#4CAF50",
        }}
      />
      <Stack.Screen
        name="user-input"
        options={{
          title: "User Input",
          headerBackTitle: "Learn",
          headerTintColor: "#9C27B0",
        }}
      />
      <Stack.Screen
        name="navigation-example"
        options={{
          title: "Navigation",
          headerBackTitle: "Learn",
          headerTintColor: "#FF9800",
        }}
      />
      <Stack.Screen
        name="modals/settings"
        options={{
          presentation: "modal",
          title: "Settings",
        }}
      />
    </Stack>
  );
}
