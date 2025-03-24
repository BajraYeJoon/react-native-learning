import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";

/**
 * Authentication Flow Example
 *
 * This example demonstrates how to create an authentication flow with expo-router,
 * allowing users to navigate between login, signup, and forgot password screens.
 * It also shows how to handle authentication success and direct users to the main app.
 */
const AuthFlow = () => {
  const router = useRouter();
  const [authScreen, setAuthScreen] = useState<"login" | "signup" | "forgot">(
    "login"
  );

  // Mock function to handle login
  const handleLogin = (email: string, password: string) => {
    // In a real app, you would perform an actual login request here
    Alert.alert("Login Success", `Successfully logged in as ${email}`, [
      {
        text: "Go to App",
        onPress: () => router.push("/navigation-example"),
      },
    ]);
  };

  // Mock function to handle signup
  const handleSignup = (email: string, password: string, name: string) => {
    // In a real app, you would perform an actual signup request here
    Alert.alert(
      "Registration Success",
      `Account created for ${name} (${email})`,
      [
        {
          text: "Go to Login",
          onPress: () => setAuthScreen("login"),
        },
      ]
    );
  };

  // Mock function to handle password reset
  const handleForgotPassword = (email: string) => {
    // In a real app, you would send a password reset email
    Alert.alert(
      "Password Reset",
      `Password reset instructions sent to ${email}`,
      [
        {
          text: "Return to Login",
          onPress: () => setAuthScreen("login"),
        },
      ]
    );
  };

  // Function to render the current authentication screen
  const renderAuthScreen = () => {
    switch (authScreen) {
      case "login":
        return (
          <LoginScreen
            onLogin={handleLogin}
            onSignupPress={() => setAuthScreen("signup")}
            onForgotPasswordPress={() => setAuthScreen("forgot")}
          />
        );
      case "signup":
        return (
          <SignupScreen
            onSignup={handleSignup}
            onLoginPress={() => setAuthScreen("login")}
          />
        );
      case "forgot":
        return (
          <ForgotPasswordScreen
            onSubmit={handleForgotPassword}
            onBackToLogin={() => setAuthScreen("login")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Authentication",
        }}
      />

      <View style={styles.container}>
        {renderAuthScreen()}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            About This Authentication Example
          </Text>
          <Text style={styles.infoText}>
            This example demonstrates a complete authentication flow using
            expo-router and React state management to switch between screens.
          </Text>
          <Text style={styles.infoText}>Key concepts demonstrated:</Text>
          <Text style={styles.bulletPoint}>
            • Screen switching within a single route
          </Text>
          <Text style={styles.bulletPoint}>• Form handling and validation</Text>
          <Text style={styles.bulletPoint}>
            • Authentication success handling
          </Text>
          <Text style={styles.bulletPoint}>
            • Navigation between related auth screens
          </Text>

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
  infoBox: {
    backgroundColor: "#f0f7ff",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    borderColor: "#cce0ff",
    borderWidth: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0066cc",
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: "#333",
    marginLeft: 10,
    marginBottom: 4,
  },
  backButton: {
    marginTop: 15,
    backgroundColor: "#0066cc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AuthFlow;
