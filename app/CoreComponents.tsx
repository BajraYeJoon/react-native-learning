import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  TextInput,
  Switch,
  ActivityIndicator,
  FlatList,
} from "react-native";

// Component for each core component section
interface ComponentSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

const ComponentSection = ({
  title,
  description,
  children,
  code,
}: ComponentSectionProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{description}</Text>

      <View style={styles.demoContainer}>{children}</View>

      <TouchableOpacity
        style={styles.codeButton}
        onPress={() => setShowCode(!showCode)}
      >
        <Text style={styles.codeButtonText}>
          {showCode ? "Hide Code" : "Show Code"}
        </Text>
      </TouchableOpacity>

      {showCode && (
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{code}</Text>
        </View>
      )}
    </View>
  );
};

export default function CoreComponentsScreen() {
  const [switchValue, setSwitchValue] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  const sampleData = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Native Core Components</Text>
          <Text style={styles.headerSubtitle}>
            The building blocks of your app
          </Text>
        </View>

        <ComponentSection
          title="View"
          description="A container supporting layout with flexbox, style, touch handling, and accessibility controls."
          code={`<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
  <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
</View>`}
        >
          <View style={styles.viewExample}>
            <View style={[styles.box, { backgroundColor: "#FF5252" }]} />
            <View style={[styles.box, { backgroundColor: "#4CAF50" }]} />
            <View style={[styles.box, { backgroundColor: "#2196F3" }]} />
          </View>
        </ComponentSection>

        <ComponentSection
          title="Text"
          description="A component for displaying text that supports nesting, styling, and touch events."
          code={`<Text style={{ fontSize: 16 }}>
  Basic text with <Text style={{ fontWeight: 'bold' }}>nested bold text</Text>
  and <Text style={{ color: 'blue' }}>colored text</Text>
</Text>`}
        >
          <Text style={styles.textExample}>
            Basic text with{" "}
            <Text style={{ fontWeight: "bold" }}>nested bold text</Text> and{" "}
            <Text style={{ color: "blue" }}>colored text</Text>
          </Text>
        </ComponentSection>

        <ComponentSection
          title="Image"
          description="A component for displaying different types of images including network, static resources, and temporary local images."
          code={`// Network image
<Image
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
  style={{ width: 100, height: 100 }}
/>

// Local image
<Image
  source={require('./assets/images/logo.png')}
  style={{ width: 100, height: 100 }}
/>`}
        >
          <View style={styles.imageExamples}>
            <View style={styles.imageItem}>
              <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={styles.image}
              />
              <Text style={styles.imageLabel}>Network Image</Text>
            </View>
          </View>
        </ComponentSection>

        <ComponentSection
          title="Button"
          description="A basic button component that renders nicely on any platform. Supports a minimal level of customization."
          code={`<Button
  onPress={() => alert('Button pressed!')}
  title="Press Me"
  color="#841584"
/>`}
        >
          <Button
            onPress={() => alert("Button has been pressed!")}
            title="Press Me"
            color="#841584"
          />
        </ComponentSection>

        <ComponentSection
          title="TouchableOpacity"
          description="A wrapper for making views respond properly to touches. Provides opacity feedback when pressed."
          code={`<TouchableOpacity 
  style={{ backgroundColor: '#2196F3', padding: 10, borderRadius: 5 }}
  onPress={() => alert('Touchable pressed!')}
>
  <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
</TouchableOpacity>`}
        >
          <TouchableOpacity
            style={styles.touchableExample}
            onPress={() => alert("Touchable has been pressed!")}
          >
            <Text style={styles.touchableText}>Press Me</Text>
          </TouchableOpacity>
        </ComponentSection>

        <ComponentSection
          title="TextInput"
          description="A foundational component for inputting text into the app via a keyboard."
          code={`<TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
  onChangeText={text => setTextInputValue(text)}
  value={textInputValue}
  placeholder="Type here..."
/>`}
        >
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Type here..."
          />
        </ComponentSection>

        <ComponentSection
          title="Switch"
          description="Renders a boolean input. Used to toggle between two states."
          code={`<Switch
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
  onValueChange={() => setSwitchValue(!switchValue)}
  value={switchValue}
/>`}
        >
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={() => setSwitchValue(!switchValue)}
              value={switchValue}
            />
            <Text style={styles.switchLabel}>
              Switch is {switchValue ? "ON" : "OFF"}
            </Text>
          </View>
        </ComponentSection>

        <ComponentSection
          title="ActivityIndicator"
          description="Displays a circular loading indicator, which is useful for showing that an operation is in progress."
          code={`<ActivityIndicator size="large" color="#0000ff" />`}
        >
          <View style={styles.activityContainer}>
            <ActivityIndicator
              size="small"
              color="#0000ff"
              style={styles.activityIndicator}
            />
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={styles.activityIndicator}
            />
          </View>
        </ComponentSection>

        <ComponentSection
          title="FlatList"
          description="A high-performance scrolling list component for rendering simple, flat lists."
          code={`<FlatList
  data={[
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ]}
  renderItem={({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  )}
  keyExtractor={item => item.id}
/>`}
        >
          <View style={styles.flatListContainer}>
            <FlatList
              data={sampleData}
              renderItem={({ item }) => (
                <View style={styles.flatListItem}>
                  <Text>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
              style={styles.flatList}
              scrollEnabled={false}
            />
          </View>
        </ComponentSection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
  },
  scrollContent: {
    paddingBottom: 30,
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
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    margin: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  demoContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    alignItems: "center",
  },
  codeButton: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  codeButtonText: {
    fontSize: 14,
    color: "#333",
  },
  codeContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  codeText: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
    color: "#333",
  },
  viewExample: {
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
  textExample: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  imageExamples: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  imageItem: {
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  imageLabel: {
    fontSize: 12,
    color: "#666",
  },
  touchableExample: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    minWidth: 120,
  },
  touchableText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  activityContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  activityIndicator: {
    margin: 10,
  },
  flatListContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  flatList: {
    maxHeight: 150,
  },
  flatListItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
