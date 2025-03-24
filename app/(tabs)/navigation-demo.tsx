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
import { Link } from "expo-router";

type NavigationExampleRoute = "onboarding" | "auth" | "main" | "profile";

export default function NavigationDemoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Navigation Examples</Text>
          <Text style={styles.headerSubtitle}>
            Explore different navigation patterns in React Native
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Choose an Example</Text>

            <TouchableOpacity
              style={[styles.exampleCard, styles.highlightedCard]}
              onPress={() => {
                // Since we can't directly link to files outside the app directory structure
                // Show a message instead
                alert(
                  "The React Navigation example is not available in this demo. Please check out the Expo Router example instead."
                );
              }}
            >
              <View style={styles.cardContent}>
                <View
                  style={[styles.iconContainer, styles.primaryIconContainer]}
                >
                  <Text style={styles.iconText}>🧭</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>React Navigation Example</Text>
                  <Text style={styles.cardDescription}>
                    Complete navigation example using React Navigation with
                    Stack, Tab, and Drawer navigation
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <Link href="/navigation-example" asChild>
              <TouchableOpacity style={styles.exampleCard}>
                <View style={styles.cardContent}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>🗺️</Text>
                  </View>
                  <View style={styles.cardDetails}>
                    <Text style={styles.cardTitle}>Expo Router Tutorial</Text>
                    <Text style={styles.cardDescription}>
                      Interactive step-by-step guide to Stack, Tab, Drawer and
                      Nested Navigation patterns using Expo Router
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardArrow}>→</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() => {
                alert(
                  "The onboarding flow example is included in the Expo Router Tutorial. Please check the navigation examples."
                );
              }}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>👋</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Onboarding Flow</Text>
                  <Text style={styles.cardDescription}>
                    A Facebook-style onboarding experience with welcome screens,
                    feature showcase, and account creation
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() => {
                alert(
                  "The authentication flow example is included in the Expo Router Tutorial. Please check the navigation examples."
                );
              }}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>🔒</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Authentication Flow</Text>
                  <Text style={styles.cardDescription}>
                    Login, registration, and password recovery screens with form
                    validation
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() => {
                alert(
                  "The main app navigation example is included in the Expo Router Tutorial. Please check the navigation examples."
                );
              }}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>📱</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Main App Navigation</Text>
                  <Text style={styles.cardDescription}>
                    Tab-based navigation with home feed, friends list, and
                    notifications
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() => {
                alert(
                  "The profile & settings example is included in the Expo Router Tutorial. Please check the navigation examples."
                );
              }}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>👤</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Profile & Settings</Text>
                  <Text style={styles.cardDescription}>
                    Drawer navigation for user profile, settings, and
                    preferences
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>
              About These Navigation Examples
            </Text>
            <Text style={styles.infoText}>
              This demo focuses on Expo Router navigation patterns:
              {"\n\n"}
              <Text style={styles.boldText}>Expo Router</Text> - A file-system
              based routing system inspired by Next.js that simplifies
              navigation in React Native.
              {"\n\n"}
              The Expo Router tutorial provides step-by-step interactive guides
              to understand different navigation patterns:
              {"\n\n"}• Stack Navigation - for screens that stack on top of each
              other
              {"\n"}• Tab Navigation - for switching between main app sections
              {"\n"}• Drawer Navigation - for side menu options like settings
              {"\n"}• Nested Navigation - combining multiple navigation types
              together
              {"\n\n"}
              Click on the "Expo Router Tutorial" card to explore these patterns
              in detail.
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
    paddingTop: 60,
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  exampleCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  highlightedCard: {
    borderWidth: 2,
    borderColor: "#1877F2",
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E7F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  primaryIconContainer: {
    backgroundColor: "#1877F2",
  },
  iconText: {
    fontSize: 24,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  cardArrow: {
    fontSize: 20,
    color: "#1877F2",
    marginLeft: 8,
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
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
});
