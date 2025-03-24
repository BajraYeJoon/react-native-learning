import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

interface SettingsScreenProps {
  onMenuPress: () => void;
}

const SettingsScreen = ({ onMenuPress }: SettingsScreenProps) => {
  // State for toggles
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [dataUsage, setDataUsage] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Settings sections
  const sections = [
    {
      title: "Account",
      items: [
        { title: "Profile Information", icon: "👤" },
        { title: "Privacy", icon: "🔒" },
        { title: "Security", icon: "🛡️" },
        { title: "Change Password", icon: "🔑" },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          title: "Dark Mode",
          icon: "🌙",
          toggle: true,
          value: darkMode,
          onValueChange: () => setDarkMode((prev) => !prev),
        },
        {
          title: "Notifications",
          icon: "🔔",
          toggle: true,
          value: notifications,
          onValueChange: () => setNotifications((prev) => !prev),
        },
        {
          title: "Location Services",
          icon: "📍",
          toggle: true,
          value: locationServices,
          onValueChange: () => setLocationServices((prev) => !prev),
        },
        {
          title: "Reduce Data Usage",
          icon: "📊",
          toggle: true,
          value: dataUsage,
          onValueChange: () => setDataUsage((prev) => !prev),
        },
        {
          title: "Autoplay Videos",
          icon: "▶️",
          toggle: true,
          value: autoplay,
          onValueChange: () => setAutoplay((prev) => !prev),
        },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Help Center", icon: "❓" },
        { title: "Report a Problem", icon: "⚠️" },
        { title: "Terms of Service", icon: "📝" },
        { title: "Privacy Policy", icon: "🔏" },
      ],
    },
  ];

  const renderSettingsItem = (item: any) => (
    <TouchableOpacity
      key={item.title}
      style={styles.settingsItem}
      disabled={item.toggle}
    >
      <View style={styles.settingsItemLeft}>
        <Text style={styles.settingsItemIcon}>{item.icon}</Text>
        <Text style={styles.settingsItemTitle}>{item.title}</Text>
      </View>
      {item.toggle ? (
        <Switch
          value={item.value}
          onValueChange={item.onValueChange}
          trackColor={{ false: "#d3d3d3", true: "#007AFF" }}
          thumbColor="#fff"
        />
      ) : (
        <Text style={styles.chevron}>›</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionItems}>
              {section.items.map(renderSettingsItem)}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  menuIcon: {
    fontSize: 24,
    color: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginHorizontal: 15,
    marginBottom: 5,
    marginTop: 15,
  },
  sectionItems: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsItemIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  settingsItemTitle: {
    fontSize: 16,
    color: "#333",
  },
  chevron: {
    fontSize: 24,
    color: "#bbb",
  },
  logoutButton: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f44336",
  },
  logoutText: {
    color: "#f44336",
    fontSize: 16,
    fontWeight: "bold",
  },
  versionText: {
    textAlign: "center",
    color: "#999",
    marginBottom: 30,
  },
});

export default SettingsScreen;
