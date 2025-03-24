import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function OnboardingFlowScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Onboarding Flow</Text>
          <Text style={styles.headerSubtitle}>
            Multi-step introduction to your app
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>About Onboarding Flows</Text>
            <Text style={styles.infoText}>
              An onboarding flow introduces users to your app, highlights key
              features, and guides them through initial setup. It's usually
              implemented using stack navigation to create a linear sequence of
              screens.
              {"\n\n"}
              In this example, we'll create a 3-step onboarding process:
              {"\n\n"}• Welcome screen with app introduction
              {"\n"}• Features showcase highlighting key functionality
              {"\n"}• Get started screen to complete onboarding
            </Text>
          </View>

          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo: Onboarding Sequence</Text>

            <View style={styles.mockScreens}>
              <View style={styles.mockScreen}>
                <View style={styles.mockHeader}>
                  <Text style={styles.mockTitle}>Welcome</Text>
                </View>
                <View style={styles.mockContent}>
                  <View style={styles.logoPlaceholder}>
                    <Text style={styles.logoText}>App Logo</Text>
                  </View>
                  <Text style={styles.mockHeadline}>Welcome to the App!</Text>
                  <Text style={styles.mockText}>
                    Your social network for connecting with friends
                  </Text>
                </View>
                <View style={styles.mockFooter}>
                  <View style={styles.pagination}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() =>
                  router.push("/navigation-example/onboarding-flow/welcome")
                }
              >
                <Text style={styles.buttonText}>Start Onboarding Demo</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>
              Implementation with Expo Router
            </Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`// Folder structure:
app/
  navigation-example/
    onboarding-flow/
      _layout.tsx      // Stack navigation layout
      index.tsx        // This intro screen
      welcome.tsx      // Welcome screen
      features.tsx     // Features screen
      get-started.tsx  // Final screen

// _layout.tsx
import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="features" />
      <Stack.Screen name="get-started" />
    </Stack>
  );}`}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.returnButton}
            onPress={() => router.push("/navigation-example")}
          >
            <Text style={styles.returnButtonText}>
              Back to Navigation Examples
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
  },
  header: {
    backgroundColor: "#1877F2",
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 5,
  },
  content: {
    padding: 16,
  },
  infoSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  demoSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  mockScreens: {
    alignItems: "center",
    marginBottom: 20,
  },
  mockScreen: {
    width: 240,
    height: 400,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  mockHeader: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  mockTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mockContent: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E7F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1877F2",
  },
  mockHeadline: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  mockText: {
    fontSize: 13,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 20,
  },
  mockFooter: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },
  activeDot: {
    backgroundColor: "#1877F2",
    width: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#1877F2",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  codeSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  codeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: "#2d2d2d",
    borderRadius: 8,
    padding: 16,
  },
  codeText: {
    fontSize: 14,
    color: "#e6e6e6",
    fontFamily: "monospace",
  },
  returnButton: {
    backgroundColor: "#6c757d",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  returnButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
