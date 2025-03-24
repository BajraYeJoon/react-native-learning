import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function StackPage3Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Stack Navigation</Text>
          <Text style={styles.headerSubtitle}>Page 3 of the stack</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo: Push and Pop</Text>

            <View style={styles.currentScreen}>
              <Text style={styles.screenIndicator}>Current Screen: Page 3</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Text style={styles.buttonText}>← Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => router.push("/")}
              >
                <Text style={styles.buttonText}>Go to Home</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Deep Navigation Stack</Text>
            <Text style={styles.infoText}>
              Now our navigation stack has 4 screens:
              {"\n\n"}
              1. Home screen
              {"\n"}
              2. Stack navigation demo screen
              {"\n"}
              3. Stack page 2{"\n"}
              4. Stack page 3 (current screen)
              {"\n\n"}
              You can press "Back" multiple times to go back through the stack,
              or press "Go to Home" to navigate directly to the home screen.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>Direct Navigation</Text>
            <Text style={styles.tipText}>
              Sometimes you want to navigate directly to a specific screen
              without adding to the stack. You can do this with:
              {"\n\n"}
              {`// Replace current screen
router.replace("./destination");

// Go to root and reset history
router.navigate("/");`}
            </Text>
          </View>

          <View style={styles.summarySection}>
            <Text style={styles.summaryTitle}>Stack Navigation Summary</Text>
            <Text style={styles.summaryText}>
              • Perfect for linear flows like wizards, forms, and detailed views
              {"\n"}• Users can navigate back through the history using the back
              button
              {"\n"}• Each screen is pushed onto a stack, maintaining navigation
              history
              {"\n"}• Can pass parameters between screens
              {"\n"}• Supported by both React Navigation and Expo Router
            </Text>
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
    backgroundColor: "#6c757d",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  homeButton: {
    backgroundColor: "#28a745",
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
  tipSection: {
    backgroundColor: "#fffaf0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#ffa500",
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  tipText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    fontFamily: "monospace",
  },
  summarySection: {
    backgroundColor: "#f0f8ff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#1877F2",
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
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
