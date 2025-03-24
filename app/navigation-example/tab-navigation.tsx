import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function TabNavigationScreen() {
  const [activeTab, setActiveTab] = useState("home");

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Home Tab</Text>
            <Text style={styles.tabDescription}>
              This is the home tab content. In a real app, this would show your
              feed, recent items, etc.
            </Text>
          </View>
        );
      case "search":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Search Tab</Text>
            <Text style={styles.tabDescription}>
              This is the search tab content. In a real app, this would include
              a search bar and results.
            </Text>
          </View>
        );
      case "notifications":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Notifications Tab</Text>
            <Text style={styles.tabDescription}>
              This is the notifications tab content. In a real app, this would
              show your activity, alerts, etc.
            </Text>
          </View>
        );
      case "profile":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Profile Tab</Text>
            <Text style={styles.tabDescription}>
              This is the profile tab content. In a real app, this would show
              your personal info, settings, etc.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tab Navigation</Text>
          <Text style={styles.headerSubtitle}>
            Switch between main app sections
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>How Tab Navigation Works</Text>
            <Text style={styles.infoText}>
              Tab navigation presents a tab bar at the bottom of the screen with
              icons and labels for each main section of your app.
              {"\n\n"}• Users can quickly switch between different sections
              {"\n"}• Each tab maintains its own navigation state and history
              {"\n"}• Perfect for top-level content categories
              {"\n\n"}
              Tab navigation is commonly used in social media, e-commerce, and
              content apps.
            </Text>
          </View>

          <View style={styles.demoSection}>
            <Text style={styles.demoTitle}>Demo: Bottom Tabs</Text>

            {/* Tab Content Area */}
            {renderTabContent()}

            {/* Tab Bar */}
            <View style={styles.tabBar}>
              <TouchableOpacity
                style={[styles.tab, activeTab === "home" && styles.activeTab]}
                onPress={() => setActiveTab("home")}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    activeTab === "home" && styles.activeTabIcon,
                  ]}
                >
                  🏠
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    activeTab === "home" && styles.activeTabLabel,
                  ]}
                >
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, activeTab === "search" && styles.activeTab]}
                onPress={() => setActiveTab("search")}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    activeTab === "search" && styles.activeTabIcon,
                  ]}
                >
                  🔍
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    activeTab === "search" && styles.activeTabLabel,
                  ]}
                >
                  Search
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "notifications" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("notifications")}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    activeTab === "notifications" && styles.activeTabIcon,
                  ]}
                >
                  🔔
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    activeTab === "notifications" && styles.activeTabLabel,
                  ]}
                >
                  Alerts
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "profile" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("profile")}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    activeTab === "profile" && styles.activeTabIcon,
                  ]}
                >
                  👤
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    activeTab === "profile" && styles.activeTabLabel,
                  ]}
                >
                  Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>
              Implementation with Expo Router
            </Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`// In app/(tabs)/_layout.tsx:
<Tabs>
  <Tabs.Screen
    name="home"
    options={{
      title: "Home",
      tabBarIcon: ({ color }) => (
        <Icon name="house" color={color} />
      ),
    }}
  />
  <Tabs.Screen name="search" ... />
  <Tabs.Screen name="profile" ... />
</Tabs>`}
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
  scrollView: {
    flex: 1,
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
  tabContent: {
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1877F2",
    marginBottom: 12,
  },
  tabDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "rgba(24, 119, 242, 0.1)",
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  activeTabIcon: {
    color: "#1877F2",
  },
  tabLabel: {
    fontSize: 12,
    color: "#666",
  },
  activeTabLabel: {
    color: "#1877F2",
    fontWeight: "bold",
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
