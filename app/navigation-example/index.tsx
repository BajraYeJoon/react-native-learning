import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Link, router, Stack } from "expo-router";

export default function NavigationExampleScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Navigation Examples",
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>🎉 New Real-World Examples!</Text>
          <Text style={styles.bannerText}>
            Check out our new real-world navigation examples with fully
            functional screens for onboarding, authentication, and main app
            navigation.
          </Text>
          <View style={styles.bannerButtonsContainer}>
            <Link href="/navigation-example/onboarding-flow-example" asChild>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Onboarding</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/navigation-example/auth-flow" asChild>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Authentication</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/navigation-example/main-app-flow" asChild>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Main App</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Basic Navigation Types</Text>
            <Text style={styles.sectionDescription}>
              Explore the core navigation patterns in React Native
            </Text>

            <Link href="/navigation-example/stack-navigation" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>Stack Navigation</Text>
                <Text style={styles.navigationLinkDescription}>
                  Push/pop navigation pattern with history support
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example/tab-navigation" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>Tab Navigation</Text>
                <Text style={styles.navigationLinkDescription}>
                  Bottom tabs for switching between screens
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example/drawer-navigation" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>
                  Drawer Navigation
                </Text>
                <Text style={styles.navigationLinkDescription}>
                  Side menu for settings and less frequent actions
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example/nested-navigation" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>
                  Nested Navigation
                </Text>
                <Text style={styles.navigationLinkDescription}>
                  Combining multiple navigation types together
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Real-World Examples</Text>
            <Text style={styles.sectionDescription}>
              Complete navigation flows for common app scenarios
            </Text>

            <Link href="/navigation-example/onboarding-flow-example" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>Onboarding Flow</Text>
                <Text style={styles.navigationLinkDescription}>
                  Multi-step introduction screens for new users
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example/auth-flow" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>
                  Authentication Flow
                </Text>
                <Text style={styles.navigationLinkDescription}>
                  Login, signup, and password recovery screens
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example/main-app-flow" asChild>
              <TouchableOpacity style={styles.navigationLink}>
                <Text style={styles.navigationLinkTitle}>Main App Flow</Text>
                <Text style={styles.navigationLinkDescription}>
                  Complete app structure with tabs, drawer and content screens
                </Text>
                <Text style={styles.navigationLinkCTA}>View Example →</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>
              About Navigation with Expo Router
            </Text>
            <Text style={styles.infoText}>
              Navigation is a fundamental part of mobile apps. Expo Router is a
              file-based router for React Native and Expo apps, inspired by
              Next.js on the web.
              {"\n\n"}
              Expo Router simplifies navigation by using the file system to
              define routes. This is similar to Next.js on the web.
              {"\n\n"}
              In this tutorial, we'll explore different navigation patterns step
              by step, all using Expo Router.
            </Text>
          </View>

          <Link href="/(tabs)" asChild>
            <TouchableOpacity style={styles.returnButton}>
              <Text style={styles.returnButtonText}>Back to Main App</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
  },
  banner: {
    backgroundColor: "#007AFF",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 15,
  },
  bannerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  bannerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
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
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  navigationLink: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  navigationLinkTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 4,
  },
  navigationLinkDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  navigationLinkCTA: {
    fontSize: 14,
    color: "#007AFF",
    alignSelf: "flex-end",
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
  returnButton: {
    backgroundColor: "#6c757d",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  returnButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
