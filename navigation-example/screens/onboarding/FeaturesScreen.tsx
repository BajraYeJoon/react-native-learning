import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../types/navigation";

type FeaturesScreenProps = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, "Features">;
};

const features = [
  {
    id: "1",
    title: "Connect with Friends",
    description:
      "Stay in touch with your friends and family through posts, messages, and stories.",
    icon: "👥",
  },
  {
    id: "2",
    title: "Share Moments",
    description: "Share photos, videos, and updates with your network.",
    icon: "📸",
  },
  {
    id: "3",
    title: "Discover Content",
    description:
      "Explore trending topics, news, and content from around the world.",
    icon: "🌍",
  },
  {
    id: "4",
    title: "Stay Updated",
    description: "Get real-time notifications about what matters to you.",
    icon: "🔔",
  },
];

export default function FeaturesScreen({ navigation }: FeaturesScreenProps) {
  const renderFeature = ({ item }: { item: (typeof features)[0] }) => (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{item.icon}</Text>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{item.title}</Text>
        <Text style={styles.featureDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Our Features</Text>
        <Text style={styles.subtitle}>
          Everything you need to stay connected
        </Text>
      </View>

      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.featuresList}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
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
  header: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  featuresList: {
    padding: 20,
  },
  featureCard: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
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
  skipButton: {
    padding: 15,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#1877f2",
    fontSize: 16,
    fontWeight: "600",
  },
});
