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

export default function StackPage2Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Stack Navigation</Text>
          <Text style={styles.headerSubtitle}>Page 2 of the stack</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo: Push and Pop</Text>

            <View style={styles.currentScreen}>
              <Text style={styles.screenIndicator}>Current Screen: Page 2</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Text style={styles.buttonText}>← Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => router.push("/navigation-example/stack-page3")}
              >
                <Text style={styles.buttonText}>Next →</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Navigation Stack State</Text>
            <Text style={styles.infoText}>
              At this point, our navigation stack looks like:
              {"\n\n"}
              1. Home screen (at the bottom of the stack)
              {"\n"}
              2. Stack navigation demo screen
              {"\n"}
              3. Stack page 2 (current screen)
              {"\n\n"}
              Pressing "Back" will pop this screen off the stack, returning you
              to the previous screen.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>Pro Tip</Text>
            <Text style={styles.tipText}>
              With stack navigation, you can pass parameters between screens:
              {"\n\n"}
              {`router.push({
  pathname: "./details",
  params: { id: "123", title: "Item" }
});`}
              {"\n\n"}
              And retrieve them using the useLocalSearchParams hook from
              expo-router.
            </Text>
          </View>
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
});
