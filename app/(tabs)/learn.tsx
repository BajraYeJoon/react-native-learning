import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

interface CoreComponentDemoProps {
  title: string;
  description: string;
  children: ReactNode;
}

function CoreComponentDemo({
  title,
  description,
  children,
}: Readonly<CoreComponentDemoProps>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.demoTitle}>{title}</Text>
      <Text style={styles.demoDescription}>{description}</Text>

      <View style={styles.demoContent}>{children}</View>

      {expanded && (
        <Text style={styles.demoExplanation}>
          {title === "View" &&
            "View is the fundamental component for building a UI, similar to a div in web development. It supports flexbox layout, style, touch handling, and accessibility controls."}
          {title === "Text" &&
            "Text is used to display text. It supports nesting, styling, and touch handling. All text elements must be wrapped in a Text component."}
          {title === "Image" &&
            "Image is used to display different types of images including network images, static resources, and images from the local disk."}
          {title === "Button" &&
            "Button provides a basic button component that is rendered according to the platform. The minimal example above shows a button that calls an onPress function when pressed."}
        </Text>
      )}

      <Button
        title={expanded ? "Show Less" : "Learn More"}
        onPress={() => setExpanded(!expanded)}
      />
    </View>
  );
}

// Add a type for our navigation items
interface NavigationItem {
  id: string;
  title: string;
  description: string;
  route: string;
  icon?: string;
}

export default function LearnScreen() {
  const navigation = useNavigation();

  // Sample navigation items that will act as our "folders"
  const navigationItems: NavigationItem[] = [
    {
      id: "1",
      title: "Core Components",
      description: "Learn about the basic building blocks of React Native",
      route: "CoreComponents",
    },
    {
      id: "2",
      title: "Layout & Styling",
      description: "Master flexbox and styling in React Native",
      route: "LayoutStyling",
    },
    {
      id: "3",
      title: "User Input",
      description: "Handle user interactions and form inputs",
      route: "UserInput",
    },
    {
      id: "4",
      title: "Navigation",
      description: "Learn how to navigate between screens",
      route: "NavigationTutorial",
    },
  ];

  // Render each navigation item as a card
  const renderNavigationItem = ({ item }: { item: NavigationItem }) => (
    <TouchableOpacity
      style={styles.navigationCard}
      onPress={() => {
        // Navigate to the route instead of showing an alert
        navigation.navigate(item.route as never);
      }}
    >
      <View style={styles.navigationCardContent}>
        <Text style={styles.navigationCardTitle}>{item.title}</Text>
        <Text style={styles.navigationCardDescription}>{item.description}</Text>
      </View>
      <View style={styles.navigationCardArrow}>
        <Text>→</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Native Learning Path</Text>
          <Text style={styles.headerSubtitle}>
            Select a topic to start learning
          </Text>
        </View>

        {/* List of navigation items */}
        <FlatList
          data={navigationItems}
          renderItem={renderNavigationItem}
          keyExtractor={(item) => item.id}
          style={styles.navigationList}
          scrollEnabled={false} // Disable scrolling since we're inside a ScrollView
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Core Components Preview</Text>
        </View>

        <CoreComponentDemo
          title="View"
          description="A container that supports layout with flexbox, style, touch handling, and accessibility controls"
        >
          <View style={styles.viewDemo}>
            <View style={[styles.box, { backgroundColor: "#FF5252" }]} />
            <View style={[styles.box, { backgroundColor: "#4CAF50" }]} />
            <View style={[styles.box, { backgroundColor: "#2196F3" }]} />
          </View>
        </CoreComponentDemo>

        <CoreComponentDemo
          title="Text"
          description="A component for displaying text"
        >
          <Text style={styles.textDemo}>Basic Text</Text>
          <Text style={styles.textDemo}>
            Text with <Text style={styles.boldText}>nested</Text> elements
          </Text>
          <Text style={[styles.textDemo, styles.customText]}>Styled Text</Text>
        </CoreComponentDemo>

        <CoreComponentDemo
          title="Image"
          description="A component for displaying images"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1726066012625-46c550bc8ebb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.imageDemo}
            resizeMode="cover"
          />
        </CoreComponentDemo>

        <CoreComponentDemo
          title="Button"
          description="A basic button component"
        >
          <TouchableOpacity>
            <Button
              title="Press Me"
              onPress={() => alert("Button pressed!")}
              color={"red"}
            />
          </TouchableOpacity>
        </CoreComponentDemo>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 20,
    backgroundColor: "#2196F3",
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
  demoContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  demoDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  demoContent: {
    marginBottom: 15,
    alignItems: "center",
  },
  demoExplanation: {
    fontSize: 14,
    color: "#444",
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  viewDemo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  textDemo: {
    marginVertical: 5,
    fontSize: 16,
  },
  boldText: {
    fontWeight: "bold",
    color: "#E91E63",
  },
  customText: {
    color: "#6200EA",
    fontWeight: "bold",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  imageDemo: {
    width: 150,
    height: 150,
  },
  navigationList: {
    marginHorizontal: 10,
  },
  navigationCard: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  navigationCardContent: {
    flex: 1,
  },
  navigationCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  navigationCardDescription: {
    fontSize: 14,
    color: "#666",
  },
  navigationCardArrow: {
    marginLeft: 10,
  },
  sectionHeader: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
