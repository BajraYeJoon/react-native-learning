import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
  Welcome: undefined;
  Features: undefined;
  GetStarted: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Friends: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type ProfileDrawerParamList = {
  ProfileMain: undefined;
  Settings: undefined;
  Privacy: undefined;
  Help: undefined;
  Logout: undefined;
};

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  MainApp: NavigatorScreenParams<MainTabParamList>;
};
