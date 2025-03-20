import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  RootStackParamList,
  OnboardingStackParamList,
  AuthStackParamList,
  MainTabParamList,
  ProfileDrawerParamList,
} from "../types/navigation";

// Import screens (we'll create these next)
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import FeaturesScreen from "../screens/onboarding/FeaturesScreen";
import GetStartedScreen from "../screens/onboarding/GetStartedScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import HomeScreen from "../screens/main/HomeScreen";
import FriendsScreen from "../screens/main/FriendsScreen";
import NotificationsScreen from "../screens/main/NotificationsScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import PrivacyScreen from "../screens/profile/PrivacyScreen";
import HelpScreen from "../screens/profile/HelpScreen";
import LogoutScreen from "../screens/profile/LogoutScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

// Onboarding Stack Navigator
const OnboardingNavigator = () => (
  <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
    <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
    <OnboardingStack.Screen name="Features" component={FeaturesScreen} />
    <OnboardingStack.Screen name="GetStarted" component={GetStartedScreen} />
  </OnboardingStack.Navigator>
);

// Auth Stack Navigator
const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Profile Drawer Navigator
const ProfileNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="ProfileMain"
      component={ProfileScreen}
      options={{ title: "Profile" }}
    />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Privacy" component={PrivacyScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />
    <Drawer.Screen name="Logout" component={LogoutScreen} />
  </Drawer.Navigator>
);

// Main Tab Navigator
const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Friends" component={FriendsScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);

// Root Stack Navigator
const RootNavigator = () => {
  // In a real app, you would check for user authentication status here
  const isAuthenticated = false;
  const hasCompletedOnboarding = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!hasCompletedOnboarding && (
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      )}
      {!isAuthenticated && (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
      {isAuthenticated && (
        <Stack.Screen name="MainApp" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
};

// Main Navigation Container
export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
