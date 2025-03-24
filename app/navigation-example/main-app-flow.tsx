import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import HomeScreen from "./screens/main-app/HomeScreen";
import NotificationsScreen from "./screens/main-app/NotificationsScreen";
import ProfileScreen from "./screens/main-app/ProfileScreen";
import SettingsScreen from "./screens/main-app/SettingsScreen";

/**
 * Main App Flow Example
 *
 * This example demonstrates how to structure a main app flow with expo-router,
 * creating a custom bottom tab navigation and drawer-like functionality.
 * It shows how to switch between different main app screens like home, notifications,
 * profile, and settings.
 */
const MainAppFlow = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "home" | "notifications" | "profile" | "settings"
  >("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to handle drawer toggle
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle tab selection
  const handleTabPress = (
    tab: "home" | "notifications" | "profile" | "settings"
  ) => {
    setActiveTab(tab);
    setIsDrawerOpen(false);
  };

  // Function to render the active screen
  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onMenuPress={toggleDrawer} />;
      case "notifications":
        return <NotificationsScreen onMenuPress={toggleDrawer} />;
      case "profile":
        return <ProfileScreen onMenuPress={toggleDrawer} />;
      case "settings":
        return <SettingsScreen onMenuPress={toggleDrawer} />;
      default:
        return null;
    }
  };

  // Function to render drawer content
  const renderDrawer = () => {
    if (!isDrawerOpen) return null;

    return (
      <View style={styles.drawerOverlay}>
        <TouchableOpacity
          style={styles.drawerBackground}
          activeOpacity={1}
          onPress={() => setIsDrawerOpen(false)}
        />
        <View style={styles.drawerContent}>
          <View style={styles.drawerHeader}>
            <View style={styles.drawerAvatar}>
              <Text style={styles.drawerAvatarText}>JD</Text>
            </View>
            <Text style={styles.drawerName}>John Doe</Text>
            <Text style={styles.drawerEmail}>john.doe@example.com</Text>
          </View>

          <View style={styles.drawerMenu}>
            <TouchableOpacity
              style={[
                styles.drawerMenuItem,
                activeTab === "home" && styles.activeMenuItem,
              ]}
              onPress={() => handleTabPress("home")}
            >
              <Text style={styles.drawerMenuIcon}>🏠</Text>
              <Text style={styles.drawerMenuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.drawerMenuItem,
                activeTab === "notifications" && styles.activeMenuItem,
              ]}
              onPress={() => handleTabPress("notifications")}
            >
              <Text style={styles.drawerMenuIcon}>🔔</Text>
              <Text style={styles.drawerMenuText}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.drawerMenuItem,
                activeTab === "profile" && styles.activeMenuItem,
              ]}
              onPress={() => handleTabPress("profile")}
            >
              <Text style={styles.drawerMenuIcon}>👤</Text>
              <Text style={styles.drawerMenuText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.drawerMenuItem,
                activeTab === "settings" && styles.activeMenuItem,
              ]}
              onPress={() => handleTabPress("settings")}
            >
              <Text style={styles.drawerMenuIcon}>⚙️</Text>
              <Text style={styles.drawerMenuText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.drawerLogout}
            onPress={() => router.push("/navigation-example")}
          >
            <Text style={styles.drawerMenuIcon}>🚪</Text>
            <Text style={styles.drawerMenuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Main App",
        }}
      />

      <View style={styles.container}>
        {renderScreen()}

        {/* Bottom Tab Navigation */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress("home")}
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
            style={styles.tabItem}
            onPress={() => handleTabPress("notifications")}
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
              Notifications
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress("profile")}
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

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress("settings")}
          >
            <Text
              style={[
                styles.tabIcon,
                activeTab === "settings" && styles.activeTabIcon,
              ]}
            >
              ⚙️
            </Text>
            <Text
              style={[
                styles.tabLabel,
                activeTab === "settings" && styles.activeTabLabel,
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        {/* Drawer */}
        {renderDrawer()}

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>About This Main App Example</Text>
          <Text style={styles.infoText}>
            This example demonstrates a complete app navigation structure
            combining:
          </Text>
          <Text style={styles.bulletPoint}>
            • Custom Tab Navigation (bottom tabs)
          </Text>
          <Text style={styles.bulletPoint}>
            • Drawer Navigation (slide-in menu)
          </Text>
          <Text style={styles.bulletPoint}>
            • Screen Navigation (content switching)
          </Text>
          <Text style={styles.bulletPoint}>• State-based UI updates</Text>

          <Link href="/navigation-example" asChild>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>Back to Examples</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    paddingBottom: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 2,
    color: "#999",
  },
  activeTabIcon: {
    color: "#007AFF",
  },
  tabLabel: {
    fontSize: 12,
    color: "#999",
  },
  activeTabLabel: {
    color: "#007AFF",
  },
  drawerOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  drawerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  drawerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "75%",
    height: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    backgroundColor: "#f8f8f8",
  },
  drawerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  drawerAvatarText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  drawerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  drawerEmail: {
    fontSize: 14,
    color: "#666",
  },
  drawerMenu: {
    flex: 1,
  },
  drawerMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activeMenuItem: {
    backgroundColor: "#f0f7ff",
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  drawerMenuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
    textAlign: "center",
  },
  drawerMenuText: {
    fontSize: 16,
    color: "#333",
  },
  drawerLogout: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
  },
  infoBox: {
    position: "absolute",
    bottom: 70,
    right: 10,
    width: 180,
    backgroundColor: "#f0f7ff",
    padding: 10,
    borderRadius: 10,
    borderColor: "#cce0ff",
    borderWidth: 1,
    zIndex: 500,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#0066cc",
  },
  infoText: {
    fontSize: 10,
    color: "#333",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 10,
    color: "#333",
    marginLeft: 5,
    marginBottom: 2,
  },
  backButton: {
    marginTop: 10,
    backgroundColor: "#0066cc",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default MainAppFlow;
