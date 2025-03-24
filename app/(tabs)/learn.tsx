import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Link, Stack } from "expo-router";

export default function LearnScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Learning Resources</Text>
          <Text style={styles.headerSubtitle}>
            Comprehensive tutorials and examples
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>React Native Fundamentals</Text>

            <Link href="/CoreComponents" asChild>
              <TouchableOpacity style={styles.resourceCard}>
                <View style={styles.cardHeader}>
                  <View
                    style={[
                      styles.resourceIcon,
                      { backgroundColor: "#E7F3FF" },
                    ]}
                  >
                    <Text style={styles.resourceIconText}>🧩</Text>
                  </View>
                  <Text style={styles.resourceTitle}>Core Components</Text>
                </View>
                <Text style={styles.resourceDescription}>
                  Learn the essential building blocks of React Native apps
                  including View, Text, Image, ScrollView, FlatList, and more.
                </Text>
                <View style={styles.tagContainer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Beginner</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>UI</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href="/LayoutStyling" asChild>
              <TouchableOpacity style={styles.resourceCard}>
                <View style={styles.cardHeader}>
                  <View
                    style={[
                      styles.resourceIcon,
                      { backgroundColor: "#E6F9ED" },
                    ]}
                  >
                    <Text style={styles.resourceIconText}>✨</Text>
                  </View>
                  <Text style={styles.resourceTitle}>Layout & Styling</Text>
                </View>
                <Text style={styles.resourceDescription}>
                  Master flexbox layouts, styling components, and creating
                  responsive designs for various device sizes.
                </Text>
                <View style={styles.tagContainer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Beginner</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Design</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href="/UserInput" asChild>
              <TouchableOpacity style={styles.resourceCard}>
                <View style={styles.cardHeader}>
                  <View
                    style={[
                      styles.resourceIcon,
                      { backgroundColor: "#F0E7FF" },
                    ]}
                  >
                    <Text style={styles.resourceIconText}>📝</Text>
                  </View>
                  <Text style={styles.resourceTitle}>User Input</Text>
                </View>
                <Text style={styles.resourceDescription}>
                  Handle text inputs, forms, validation, and different keyboard
                  types for gathering user data.
                </Text>
                <View style={styles.tagContainer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Intermediate</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Forms</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navigation Tutorials</Text>

            <Link href="/navigation-example" asChild>
              <TouchableOpacity style={styles.resourceCard}>
                <View style={styles.cardHeader}>
                  <View
                    style={[
                      styles.resourceIcon,
                      { backgroundColor: "#FFF2E6" },
                    ]}
                  >
                    <Text style={styles.resourceIconText}>🧭</Text>
                  </View>
                  <Text style={styles.resourceTitle}>Navigation Examples</Text>
                </View>
                <Text style={styles.resourceDescription}>
                  Explore comprehensive navigation patterns including stack,
                  tab, drawer, and nested navigation with real-world examples.
                </Text>
                <View style={styles.tagContainer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Intermediate</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Navigation</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.backButtonContainer}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#1877F2",
    padding: 25,
    paddingTop: 60,
    paddingBottom: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: "80%",
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  resourceCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  resourceIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  resourceIconText: {
    fontSize: 20,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  resourceDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  tag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: "#666",
  },
  backButtonContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: "#1877F2",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
