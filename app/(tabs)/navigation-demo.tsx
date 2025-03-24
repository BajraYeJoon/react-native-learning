import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

type NavigationExampleRoute = "onboarding" | "auth" | "main" | "profile";

export default function NavigationDemo() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>React Native Navigation</Text>
            <Text style={styles.headerSubtitle}>
              Learn how to implement navigation in your app
            </Text>
          </View>

          <View style={styles.content}>
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>About Navigation</Text>
              <Text style={styles.infoText}>
                Navigation is a crucial part of any mobile application. It
                allows users to move between screens and access different
                functionality within your app.
                {"\n\n"}
                React Native offers several navigation options, and with Expo
                Router, implementing navigation becomes even simpler with a
                file-system based approach.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Choose an Example</Text>

              <Link href="/navigation-example" asChild>
                <TouchableOpacity style={styles.tutorialCard}>
                  <View style={styles.cardContent}>
                    <View style={styles.iconContainer}>
                      <Text style={styles.iconText}>🧭</Text>
                    </View>
                    <View style={styles.cardDetails}>
                      <Text style={styles.cardTitle}>Navigation Tutorial</Text>
                      <Text style={styles.cardDescription}>
                        Complete tutorial with examples of different navigation
                        types and real-world flows
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.cardArrow}>→</Text>
                </TouchableOpacity>
              </Link>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Links</Text>

              <View style={styles.quickLinks}>
                <Link href="/navigation-example/stack-navigation" asChild>
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>Stack Navigation</Text>
                  </TouchableOpacity>
                </Link>

                <Link href="/navigation-example/tab-navigation" asChild>
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>Tab Navigation</Text>
                  </TouchableOpacity>
                </Link>

                <Link href="/navigation-example/drawer-navigation" asChild>
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>Drawer Navigation</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Real-World Examples</Text>

              <View style={styles.quickLinks}>
                <Link
                  href="/navigation-example/onboarding-flow-example"
                  asChild
                >
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>Onboarding Flow</Text>
                  </TouchableOpacity>
                </Link>

                <Link href="/navigation-example/auth-flow" asChild>
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>
                      Authentication Flow
                    </Text>
                  </TouchableOpacity>
                </Link>

                <Link href="/navigation-example/main-app-flow" asChild>
                  <TouchableOpacity style={styles.quickLink}>
                    <Text style={styles.quickLinkText}>Main App Flow</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  scrollView: {
    paddingBottom: 20,
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
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  tutorialCard: {
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
    marginBottom: 30,
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
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
  quickLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickLink: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  quickLinkText: {
    color: "#1877F2",
    fontWeight: "bold",
  },
});
