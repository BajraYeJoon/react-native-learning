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

export default function NavigationExampleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Learn Navigation with Expo Router
          </Text>
          <Text style={styles.headerSubtitle}>
            Step-by-step guide to different navigation patterns
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navigation Types</Text>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() =>
                router.push("/navigation-example/stack-navigation")
              }
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>1️⃣</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Stack Navigation</Text>
                  <Text style={styles.cardDescription}>
                    Learn about push/pop navigation for screens that stack on
                    top of each other
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() => router.push("/navigation-example/tab-navigation")}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>2️⃣</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Tab Navigation</Text>
                  <Text style={styles.cardDescription}>
                    Learn how to implement bottom tabs for main app sections
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() =>
                router.push("/navigation-example/drawer-navigation")
              }
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>3️⃣</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Drawer Navigation</Text>
                  <Text style={styles.cardDescription}>
                    Learn about side drawer navigation for settings and profile
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exampleCard}
              onPress={() =>
                router.push("/navigation-example/nested-navigation")
              }
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>4️⃣</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Nested Navigation</Text>
                  <Text style={styles.cardDescription}>
                    Learn how to combine different navigation types together
                  </Text>
                </View>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
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

          <TouchableOpacity
            style={styles.returnButton}
            onPress={() => router.push("/(tabs)/navigation-demo")}
          >
            <Text style={styles.returnButtonText}>Back to Navigation Demo</Text>
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
    paddingTop: 20,
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
