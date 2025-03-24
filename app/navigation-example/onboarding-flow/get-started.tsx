import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";
import { router } from "expo-router";

export default function GetStartedScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [dataAnalyticsEnabled, setDataAnalyticsEnabled] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Setup Your Profile</Text>
        <Text style={styles.subtitle}>
          Just a few more settings before you get started
        </Text>

        <View style={styles.settingsList}>
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Enable Notifications</Text>
              <Text style={styles.settingDescription}>
                Receive updates about activity and new features
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#d3d3d3", true: "#1877F2" }}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Data Analytics</Text>
              <Text style={styles.settingDescription}>
                Help us improve by sharing anonymous usage data
              </Text>
            </View>
            <Switch
              value={dataAnalyticsEnabled}
              onValueChange={setDataAnalyticsEnabled}
              trackColor={{ false: "#d3d3d3", true: "#1877F2" }}
            />
          </View>
        </View>
      </View>

      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <Text style={styles.stepText}>Step 3 of 3</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/navigation-example")}
        >
          <Text style={styles.buttonText}>Complete Setup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.back()}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  settingsList: {
    marginTop: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 15,
  },
  settingContent: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  settingDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },
  activeDot: {
    backgroundColor: "#1877F2",
    width: 16,
  },
  stepText: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#1877f2",
  },
  secondaryButtonText: {
    color: "#1877f2",
  },
});
