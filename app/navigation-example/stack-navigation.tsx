import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Link, router } from "expo-router";

// Stack navigation demo with multiple pages that can be pushed/popped
export default function StackNavigationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Stack Navigation</Text>
          <Text style={styles.headerSubtitle}>
            Screens stack on top of each other
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>How Stack Navigation Works</Text>
            <Text style={styles.infoText}>
              Stack navigation is the most basic form of navigation in mobile
              apps. It works like a stack of cards:
              {"\n\n"}• New screens are "pushed" onto the stack
              {"\n"}• When you go back, screens are "popped" off the stack
              {"\n\n"}
              Stack navigation is perfect for linear flows like onboarding,
              authentication, or any sequence of screens.
            </Text>
          </View>

          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo: Push and Pop</Text>

            <View style={styles.currentScreen}>
              <Text style={styles.screenIndicator}>Current Screen: Page 1</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                disabled={true}
                onPress={() => router.back()}
              >
                <Text style={[styles.buttonText, styles.disabledText]}>
                  ← Back
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => router.push("/navigation-example/stack-page2")}
              >
                <Text style={styles.buttonText}>Next →</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>
              Implementation with Expo Router
            </Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`// In your _layout.tsx file:
<Stack>
  <Stack.Screen name="index" />
  <Stack.Screen name="page2" />
  <Stack.Screen name="page3" />
</Stack>

// Navigate to next page:
router.push("/path-to-page");

// Go back:
router.back();`}
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
  currentScreen: {
    backgroundColor: "#E7F3FF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  screenIndicator: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1877F2",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    backgroundColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#1877F2",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  disabledText: {
    color: "#999",
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
