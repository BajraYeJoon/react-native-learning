import React from "react";
import { Stack } from "expo-router";

export default function NavigationExamplesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1877F2",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Navigation Examples",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          title: "Onboarding Flow",
        }}
      />
      <Stack.Screen
        name="auth"
        options={{
          title: "Authentication",
        }}
      />
      <Stack.Screen
        name="main"
        options={{
          title: "Main App",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile & Settings",
        }}
      />
    </Stack>
  );
}
