import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.title}>React Native Learning</Text>
          <Text style={styles.subtitle}>
            Your journey to mobile development mastery begins here
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <Link href="/navigation-example" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.cardIcon, { backgroundColor: "#E7F3FF" }]}>
                <Text style={styles.cardIconText}>🧭</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Navigation</Text>
                <Text style={styles.cardDescription}>
                  Learn to implement various navigation patterns and flows
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/CoreComponents" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.cardIcon, { backgroundColor: "#FFF2E6" }]}>
                <Text style={styles.cardIconText}>🧩</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Core Components</Text>
                <Text style={styles.cardDescription}>
                  Explore essential React Native building blocks
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/LayoutStyling" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.cardIcon, { backgroundColor: "#E6F9ED" }]}>
                <Text style={styles.cardIconText}>✨</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Layout & Styling</Text>
                <Text style={styles.cardDescription}>
                  Master flexbox and styling in React Native
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/UserInput" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.cardIcon, { backgroundColor: "#F0E7FF" }]}>
                <Text style={styles.cardIconText}>📝</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>User Input</Text>
                <Text style={styles.cardDescription}>
                  Handle text inputs, forms, and validation
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with ❤️ for beginners</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
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
    padding: 30,
    paddingTop: 80,
    paddingBottom: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  welcome: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: "80%",
    lineHeight: 22,
  },
  cardsContainer: {
    padding: 20,
    paddingTop: 30,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIconText: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  cardArrow: {
    fontSize: 20,
    color: "#1877F2",
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  version: {
    fontSize: 12,
    color: "#999",
  },
});
