import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { router } from "expo-router";

// Get device width for drawer
const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.7;

export default function NestedNavigationScreen() {
  // State for the current tab and drawer visibility
  const [activeTab, setActiveTab] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  // Toggle drawer
  const toggleDrawer = () => {
    if (drawerOpen) {
      // Close drawer
      Animated.timing(animation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      // Open drawer
      Animated.timing(animation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
    setDrawerOpen(!drawerOpen);
  };

  // Calculate drawer animation position
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-DRAWER_WIDTH, 0],
  });

  // Calculate content position and opacity
  const contentTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, DRAWER_WIDTH * 0.3],
  });

  const contentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  // Function to render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Home Tab</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Featured Item</Text>
              <Text style={styles.cardDescription}>
                This is a featured item that would appear on your home screen.
              </Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => router.push("./stack-navigation")}
              >
                <Text style={styles.cardButtonText}>View Details →</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Recent Activity</Text>
              <Text style={styles.cardDescription}>
                This shows your recent activity in the app.
              </Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => router.push("./tab-navigation")}
              >
                <Text style={styles.cardButtonText}>See All →</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "search":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Search Tab</Text>
            <View style={styles.searchSection}>
              <Text style={styles.searchPlaceholder}>🔍 Search here...</Text>
              <View style={styles.searchResults}>
                <Text style={styles.searchResultTitle}>Search Results</Text>
                <Text style={styles.searchResultDescription}>
                  This would show search results. Tap an item to see details.
                </Text>
              </View>
            </View>
          </View>
        );
      case "profile":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Profile Tab</Text>
            <View style={styles.profileHeader}>
              <View style={styles.profileAvatar}>
                <Text style={styles.avatarText}>👤</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>john.doe@example.com</Text>
              </View>
            </View>
            <View style={styles.profileStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>42</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1,337</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>890</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.profileEditButton}
              onPress={() => toggleDrawer()}
            >
              <Text style={styles.profileEditButtonText}>
                Edit Profile Settings
              </Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Drawer Overlay */}
      {drawerOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleDrawer}
        />
      )}

      {/* Drawer Content */}
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerTitle}>Profile Settings</Text>
        </View>
        <ScrollView style={styles.drawerContent}>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>👤</Text>
            <Text style={styles.drawerItemText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>🔒</Text>
            <Text style={styles.drawerItemText}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>⚙️</Text>
            <Text style={styles.drawerItemText}>Account Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>🌙</Text>
            <Text style={styles.drawerItemText}>Appearance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>❓</Text>
            <Text style={styles.drawerItemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemIcon}>🚪</Text>
            <Text style={styles.drawerItemText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>

      {/* Main Content */}
      <Animated.View
        style={[
          styles.mainContent,
          {
            transform: [{ translateX: contentTranslateX }],
            opacity: contentOpacity,
          },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nested Navigation</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Combined Navigation Types</Text>
            <Text style={styles.infoText}>
              In real-world apps, you'll often combine multiple navigation
              patterns together:
              {"\n\n"}• Tabs for main sections
              {"\n"}• Stack navigation within each tab
              {"\n"}• Drawer for settings or additional options
              {"\n\n"}
              This demo shows an app with tabs at the bottom, stack navigation
              for details, and a drawer for settings.
            </Text>
          </View>

          {/* Tab Content */}
          {renderTabContent()}

          <View style={styles.diagramSection}>
            <Text style={styles.diagramTitle}>Nested Navigation Structure</Text>
            <View style={styles.diagram}>
              <Text style={styles.diagramText}>
                {`Root Navigation
  ┌─────────────────────┐
  │ Drawer Navigation   │
  │   ┌───────────────┐ │
  │   │ Tab Navigation│ │
  │   │   ┌─────────┐ │ │
  │   │   │ Stack   │ │ │
  │   │   │ Screens │ │ │
  │   │   └─────────┘ │ │
  │   └───────────────┘ │
  └─────────────────────┘`}
              </Text>
            </View>
          </View>

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>
              Implementation with Expo Router
            </Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`// Folder structure for nested navigation:
app/
  _layout.tsx           // Root layout
  (drawer)/             // Drawer routes
    _layout.tsx         // Drawer layout
    (tabs)/             // Tab routes
      _layout.tsx       // Tab layout
      home.tsx
      search.tsx
      profile/          // Stack routes
        _layout.tsx     // Stack layout
        index.tsx       // Profile main
        edit.tsx        // Edit profile
        settings.tsx    // Settings`}
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
        </ScrollView>

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
            style={[styles.tab, activeTab === "profile" && styles.activeTab]}
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
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: "white",
    zIndex: 2,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#1877F2",
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  drawerContent: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  drawerItemIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  drawerItemText: {
    fontSize: 16,
    color: "#333",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  header: {
    backgroundColor: "#1877F2",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButtonText: {
    fontSize: 24,
    color: "white",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 70, // Add padding for the tab bar
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
  tabContent: {
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
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1877F2",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: "#1877F2",
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
  cardButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  searchSection: {
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 16,
  },
  searchPlaceholder: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#aaa",
    marginBottom: 16,
  },
  searchResults: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    minHeight: 150,
  },
  searchResultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  searchResultDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: "#777",
  },
  profileStats: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1877F2",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#555",
  },
  profileEditButton: {
    backgroundColor: "#1877F2",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  profileEditButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  diagramSection: {
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
  diagramTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  diagram: {
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 16,
  },
  diagramText: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "#333",
    lineHeight: 18,
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
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
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
  returnButton: {
    backgroundColor: "#6c757d",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 40,
  },
  returnButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
