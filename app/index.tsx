import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>React Native Learning</Text>
          <Text style={styles.subtitle}>
            A complete guide to React Native development
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>What You'll Learn</Text>

          <View style={styles.cardContainer}>
            <Link href="/core-components" asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitle}>Core Components</Text>
                <Text style={styles.cardDescription}>
                  Learn about the fundamental building blocks of React Native.
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/layout-styling" asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitle}>Layout & Styling</Text>
                <Text style={styles.cardDescription}>
                  Master Flexbox and styling techniques for beautiful UIs.
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/user-input" asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitle}>User Input</Text>
                <Text style={styles.cardDescription}>
                  Handle user interactions and form inputs effectively.
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/navigation-example" asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitle}>Navigation</Text>
                <Text style={styles.cardDescription}>
                  Learn about different navigation patterns and techniques.
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.settingsContainer}>
            <Link href="/modals/settings" asChild>
              <TouchableOpacity style={styles.settingsButton}>
                <Text style={styles.settingsButtonText}>Settings</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  cardContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  settingsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  settingsButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  settingsButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
