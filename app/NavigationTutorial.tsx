import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";

export default function NavigationTutorialScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Navigation in React Native</Text>
          <Text style={styles.headerSubtitle}>
            Learn how to navigate between screens
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation Basics</Text>
          <Text style={styles.sectionContent}>
            React Native doesn't have a built-in API for navigation. The
            community standard is React Navigation, which provides a way to
            navigate between screens and manage navigation history.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation Types</Text>

          <View style={styles.navTypeContainer}>
            <View style={styles.navTypeHeader}>
              <Text style={styles.navTypeName}>Stack Navigation</Text>
            </View>
            <View style={styles.navTypeContent}>
              <Image
                source={{ uri: "https://reactnavigation.org/img/stack.gif" }}
                style={styles.navImage}
                resizeMode="contain"
              />
              <Text style={styles.navTypeDescription}>
                Presents screens as a stack where one screen is presented above
                another. Provides a back button to navigate to the previous
                screen.
              </Text>
              <View style={styles.codeBlock}>
                <Text style={styles.code}>
                  {`const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}`}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.navTypeContainer}>
            <View style={styles.navTypeHeader}>
              <Text style={styles.navTypeName}>Tab Navigation</Text>
            </View>
            <View style={styles.navTypeContent}>
              <Image
                source={{ uri: "https://reactnavigation.org/img/tabs.gif" }}
                style={styles.navImage}
                resizeMode="contain"
              />
              <Text style={styles.navTypeDescription}>
                Provides a tab bar that lets users switch between different
                screens by tapping the tabs. Each tab typically leads to a
                different navigation stack.
              </Text>
              <View style={styles.codeBlock}>
                <Text style={styles.code}>
                  {`const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}`}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.navTypeContainer}>
            <View style={styles.navTypeHeader}>
              <Text style={styles.navTypeName}>Drawer Navigation</Text>
            </View>
            <View style={styles.navTypeContent}>
              <Image
                source={{ uri: "https://reactnavigation.org/img/drawer.gif" }}
                style={styles.navImage}
                resizeMode="contain"
              />
              <Text style={styles.navTypeDescription}>
                Provides a side menu that can be opened by swiping from the edge
                of the screen or tapping a hamburger icon. Great for providing
                access to less frequently used screens.
              </Text>
              <View style={styles.codeBlock}>
                <Text style={styles.code}>
                  {`const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}`}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation Usage</Text>

          <View style={styles.usageContainer}>
            <Text style={styles.usageTitle}>Setting Up Navigation</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>
                {`// Install required packages
npm install @react-navigation/native

// Install navigation container
npm install react-native-screens react-native-safe-area-context

// For stack navigation
npm install @react-navigation/stack

// For tab navigation
npm install @react-navigation/bottom-tabs

// For drawer navigation
npm install @react-navigation/drawer`}
              </Text>
            </View>
          </View>

          <View style={styles.usageContainer}>
            <Text style={styles.usageTitle}>Navigating Between Screens</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>
                {`// In a component
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();
  
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
}`}
              </Text>
            </View>
          </View>

          <View style={styles.usageContainer}>
            <Text style={styles.usageTitle}>Passing Parameters</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>
                {`// Sending parameters
navigation.navigate('Details', { id: 86, name: 'React Native' });

// Receiving parameters
import { useRoute } from '@react-navigation/native';

function DetailsScreen() {
  const route = useRoute();
  const { id, name } = route.params;
  
  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  );
}`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Navigation</Text>

          <View style={styles.tipContainer}>
            <Text style={styles.tipNumber}>1</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Organize Navigation Logic</Text>
              <Text style={styles.tipDescription}>
                Keep navigation logic separate from your UI components when
                possible. This makes your code more maintainable.
              </Text>
            </View>
          </View>

          <View style={styles.tipContainer}>
            <Text style={styles.tipNumber}>2</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>
                Use TypeScript for Route Params
              </Text>
              <Text style={styles.tipDescription}>
                If you're using TypeScript, define types for your route
                parameters to catch errors early.
              </Text>
            </View>
          </View>

          <View style={styles.tipContainer}>
            <Text style={styles.tipNumber}>3</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Customize Headers</Text>
              <Text style={styles.tipDescription}>
                Use options to customize headers for each screen with titles,
                buttons, and styles.
              </Text>
            </View>
          </View>

          <View style={styles.tipContainer}>
            <Text style={styles.tipNumber}>4</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Combine Navigation Types</Text>
              <Text style={styles.tipDescription}>
                You can nest navigators to create complex navigation structures
                (e.g., tabs with stacks inside each tab).
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.resourcesSection}>
          <Text style={styles.resourcesTitle}>Additional Resources</Text>
          <View style={styles.resourcesList}>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceName}>React Navigation Docs</Text>
              <Text style={styles.resourceUrl}>reactnavigation.org</Text>
            </View>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceName}>Expo Router</Text>
              <Text style={styles.resourceUrl}>expo.github.io/router/docs</Text>
            </View>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceName}>File-based Routing</Text>
              <Text style={styles.resourceUrl}>GitHub: nandorojo/solito</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
  },
  header: {
    backgroundColor: "#2196F3",
    padding: 20,
    paddingTop: Platform.OS === "android" ? 40 : 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 5,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  navTypeContainer: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    overflow: "hidden",
  },
  navTypeHeader: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  navTypeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  navTypeContent: {
    padding: 15,
  },
  navImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
  },
  navTypeDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 15,
  },
  codeBlock: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  code: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
    color: "#333",
  },
  usageContainer: {
    marginVertical: 15,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  tipContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "flex-start",
  },
  tipNumber: {
    backgroundColor: "#2196F3",
    color: "white",
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    lineHeight: 30,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 15,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  tipDescription: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  resourcesSection: {
    backgroundColor: "#EFF7FF",
    borderRadius: 8,
    margin: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  resourcesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  resourcesList: {},
  resourceItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#2196F3",
  },
  resourceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  resourceUrl: {
    fontSize: 14,
    color: "#2196F3",
    marginTop: 5,
  },
});
