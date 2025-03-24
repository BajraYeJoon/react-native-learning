import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function FeaturesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Key Features</Text>
        <Text style={styles.subtitle}>
          Discover what makes our app unique and powerful
        </Text>

        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📸</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Photo Sharing</Text>
              <Text style={styles.featureDescription}>
                Share high-quality photos with friends and family
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>💬</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Messaging</Text>
              <Text style={styles.featureDescription}>
                Private conversations with end-to-end encryption
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🔔</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Notifications</Text>
              <Text style={styles.featureDescription}>
                Stay updated with what matters most to you
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <Text style={styles.stepText}>Step 2 of 3</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("./get-started")}
        >
          <Text style={styles.buttonText}>Next</Text>
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
  featureList: {
    marginTop: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 15,
  },
  featureIcon: {
    fontSize: 30,
    marginRight: 15,
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  featureDescription: {
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
