import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  OnboardingStackParamList,
  RootStackParamList,
} from "../../types/navigation";

type GetStartedScreenProps = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, "GetStarted">;
};

export default function GetStartedScreen({
  navigation,
}: GetStartedScreenProps) {
  const handleNavigateToAuth = () => {
    // Use the root navigation to access the Auth stack
    const rootNavigation = navigation.getParent();
    if (rootNavigation) {
      rootNavigation.navigate("Auth");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Ready to Get Started?</Text>
        <Text style={styles.subtitle}>
          Join millions of people who are already connecting and sharing on our
          platform.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToAuth}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleNavigateToAuth}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By continuing, you agree to our{" "}
          <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
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
    lineHeight: 24,
    marginBottom: 30,
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
  termsContainer: {
    padding: 20,
    alignItems: "center",
  },
  termsText: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
  termsLink: {
    color: "#1877f2",
    textDecorationLine: "underline",
  },
});
