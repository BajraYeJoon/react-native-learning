import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import WelcomeScreen from "./screens/onboarding/WelcomeScreen";
import FeatureScreen from "./screens/onboarding/FeatureScreen";
import SetupScreen from "./screens/onboarding/SetupScreen";

/**
 * Onboarding Flow Example
 *
 * This example demonstrates how to create a multi-step onboarding flow
 * with expo-router. The flow consists of three screens:
 * 1. Welcome Screen - Introduction to the app
 * 2. Feature Screen - Showcase key features
 * 3. Setup Screen - User preferences setup
 */
const OnboardingFlowExample = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  // Function to handle navigation to next step
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // At the last step, complete onboarding
      handleComplete();
    }
  };

  // Function to handle skip (moves to the last step)
  const handleSkip = () => {
    setCurrentStep(totalSteps - 1);
  };

  // Function to handle onboarding completion
  const handleComplete = () => {
    // In a real app, you would:
    // 1. Save that onboarding is complete
    // 2. Navigate to the main app
    router.push("/navigation-example");
  };

  // Function to render the current onboarding step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <WelcomeScreen
            onNext={handleNext}
            onSkip={handleSkip}
            step={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 1:
        return (
          <FeatureScreen
            onNext={handleNext}
            onSkip={handleSkip}
            step={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 2:
        return (
          <SetupScreen
            onNext={handleComplete}
            onSkip={handleComplete}
            step={currentStep}
            totalSteps={totalSteps}
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
          title: "Onboarding Example",
        }}
      />

      <View style={styles.container}>
        {renderStep()}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>About This Example</Text>
          <Text style={styles.infoText}>
            This example demonstrates a structured onboarding flow with multiple
            steps using expo-router and React state management.
          </Text>
          <Text style={styles.infoText}>Key concepts demonstrated:</Text>
          <Text style={styles.bulletPoint}>
            • Step-by-step navigation using React state
          </Text>
          <Text style={styles.bulletPoint}>
            • Conditional rendering of screens
          </Text>
          <Text style={styles.bulletPoint}>• Skip functionality</Text>
          <Text style={styles.bulletPoint}>• Progress tracking</Text>
          <Text style={styles.bulletPoint}>• Completion handling</Text>

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

export default OnboardingFlowExample;
