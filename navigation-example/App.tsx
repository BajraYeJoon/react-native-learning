import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation";

export default function NavigationExampleApp() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
