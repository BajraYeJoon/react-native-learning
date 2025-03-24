import React from "react";
import { Stack } from "expo-router";

export default function NavigationExampleLayout() {
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
          title: "Navigation Tutorial",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="stack-navigation"
        options={{
          title: "Stack Navigation",
        }}
      />
      <Stack.Screen
        name="stack-page2"
        options={{
          title: "Stack Page 2",
        }}
      />
      <Stack.Screen
        name="stack-page3"
        options={{
          title: "Stack Page 3",
        }}
      />
      <Stack.Screen
        name="tab-navigation"
        options={{
          title: "Tab Navigation",
        }}
      />
      <Stack.Screen
        name="drawer-navigation"
        options={{
          title: "Drawer Navigation",
        }}
      />
      <Stack.Screen
        name="nested-navigation"
        options={{
          title: "Nested Navigation",
        }}
      />
    </Stack>
  );
}
