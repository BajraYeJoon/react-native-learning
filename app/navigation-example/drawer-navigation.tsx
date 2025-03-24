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

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.7;

export default function DrawerNavigationScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("profile");

  // Animation value for drawer
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

  // Navigate to a screen from the drawer
  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen);
    toggleDrawer();
  };

  // Render current screen content
  const renderScreenContent = () => {
    switch (currentScreen) {
      case "profile":
        return (
          <View style={styles.screenContent}>
            <Text style={styles.screenTitle}>Profile</Text>
            <Text style={styles.screenDescription}>
              This is your profile screen. It would show your personal
              information, avatar, and activity.
            </Text>
          </View>
        );
      case "settings":
        return (
          <View style={styles.screenContent}>
            <Text style={styles.screenTitle}>Settings</Text>
            <Text style={styles.screenDescription}>
              This is the settings screen. It would allow you to customize the
              app's behavior and appearance.
            </Text>
          </View>
        );
      case "privacy":
        return (
          <View style={styles.screenContent}>
            <Text style={styles.screenTitle}>Privacy</Text>
            <Text style={styles.screenDescription}>
              This is the privacy screen. It would allow you to manage your
              privacy settings and data.
            </Text>
          </View>
        );
      case "help":
        return (
          <View style={styles.screenContent}>
            <Text style={styles.screenTitle}>Help & Support</Text>
            <Text style={styles.screenDescription}>
              This is the help screen. It would provide FAQs, support contact,
              and troubleshooting.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  // Calculate drawer position based on animation value
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-DRAWER_WIDTH, 0],
  });

  // Calculate content position and opacity based on animation value
  const contentTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, DRAWER_WIDTH * 0.3],
  });

  const contentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Drawer Overlay - shown when drawer is open */}
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
          <Text style={styles.drawerTitle}>Menu</Text>
        </View>
        <ScrollView style={styles.drawerContent}>
          <TouchableOpacity
            style={[
              styles.drawerItem,
              currentScreen === "profile" && styles.activeDrawerItem,
            ]}
            onPress={() => navigateToScreen("profile")}
          >
            <Text style={styles.drawerItemIcon}>👤</Text>
            <Text style={styles.drawerItemText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              currentScreen === "settings" && styles.activeDrawerItem,
            ]}
            onPress={() => navigateToScreen("settings")}
          >
            <Text style={styles.drawerItemIcon}>⚙️</Text>
            <Text style={styles.drawerItemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              currentScreen === "privacy" && styles.activeDrawerItem,
            ]}
            onPress={() => navigateToScreen("privacy")}
          >
            <Text style={styles.drawerItemIcon}>🔒</Text>
            <Text style={styles.drawerItemText}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.drawerItem,
              currentScreen === "help" && styles.activeDrawerItem,
            ]}
            onPress={() => navigateToScreen("help")}
          >
            <Text style={styles.drawerItemIcon}>❓</Text>
            <Text style={styles.drawerItemText}>Help & Support</Text>
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
          <Text style={styles.headerTitle}>Drawer Navigation</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>How Drawer Navigation Works</Text>
            <Text style={styles.infoText}>
              Drawer navigation provides a hidden side menu that can be toggled
              by tapping a button (usually a hamburger icon).
              {"\n\n"}• Perfect for apps with many navigation options
              {"\n"}• Commonly used for settings, account options, and
              categories
              {"\n"}• Can be combined with other navigation types
              {"\n\n"}
              Tap the ☰ button in the header to toggle the drawer!
            </Text>
          </View>

          {/* Current Screen Content */}
          {renderScreenContent()}

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>
              Implementation with Expo Router
            </Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`// In _layout.tsx:
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({color}) => 
            <Icon name="user" color={color} />
        }}
      />
      <Drawer.Screen name="settings" ... />
      <Drawer.Screen name="privacy" ... />
    </Drawer>
  );
}`}
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
  activeDrawerItem: {
    backgroundColor: "#f1f9ff",
    borderLeftWidth: 4,
    borderLeftColor: "#1877F2",
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
  screenContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 200,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1877F2",
    marginBottom: 12,
  },
  screenDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
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
    marginBottom: 40,
  },
  returnButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
