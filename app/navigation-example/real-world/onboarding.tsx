import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";

// Import the onboarding screens
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import FeatureScreen from "../screens/onboarding/FeatureScreen";
import SetupScreen from "../screens/onboarding/SetupScreen";

const { width } = Dimensions.get("window");

const OnboardingFlowScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const screens = [
    { component: WelcomeScreen, title: "Welcome" },
    { component: FeatureScreen, title: "Features" },
    { component: SetupScreen, title: "Setup" },
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      // Onboarding complete, navigate to auth or home
      router.push("../auth/");
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    } else {
      router.back();
    }
  };

  const handleSkip = () => {
    router.push("../auth/");
  };

  const CurrentScreenComponent = screens[currentScreen].component;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Onboarding Flow</Text>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>
            Real-World Example: Onboarding
          </Text>
          <Text style={styles.sectionDescription}>
            This example shows a complete onboarding flow with multiple screens.
            You can navigate through each screen with the Next button, go back
            with the Back button, or skip the flow entirely. After completing
            the flow, you'll be redirected to the authentication screen.
          </Text>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.demoTitle}>Onboarding Demo</Text>
          <View style={styles.screenContainer}>
            <CurrentScreenComponent
              onNext={handleNext}
              onSkip={handleSkip}
              step={currentScreen + 1}
              totalSteps={screens.length}
            />
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.sectionDescription}>
            This onboarding flow uses local state to manage which screen is
            currently displayed. The flow consists of {screens.length} screens:{" "}
            {screens.map((s) => s.title).join(", ")}.
          </Text>

          <Text style={styles.codeTitle}>Implementation with Expo Router:</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`
// File structure for onboarding:
/app
  /onboarding
    /_layout.tsx (Stack layout)
    /index.tsx (Welcome screen)
    /features.tsx (Features screen)
    /setup.tsx (Setup screen)
              `}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("../")}
        >
          <Text style={styles.footerButtonText}>Back to Examples</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 22,
    color: "#007AFF",
  },
  skipButton: {
    padding: 8,
  },
  skipButtonText: {
    color: "#007AFF",
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  infoSection: {
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  demoSection: {
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  screenContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },
  codeBlock: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "#333",
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
  },
  footerButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingFlowScreen;
