import React, { useState } from "react";
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

// Component for each layout example
interface LayoutExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

const LayoutExample = ({
  title,
  description,
  children,
  code,
}: LayoutExampleProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.exampleTitle}>{title}</Text>
      <Text style={styles.exampleDescription}>{description}</Text>

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

export default function LayoutStylingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Layout & Styling</Text>
          <Text style={styles.headerSubtitle}>
            Understand flexbox and styling in React Native
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flexbox Layout</Text>
          <Text style={styles.sectionDescription}>
            React Native uses Flexbox for layout. It helps you design flexible
            layouts that look consistent across different screen sizes.
          </Text>
        </View>

        {/* Flex Direction */}
        <LayoutExample
          title="Flex Direction"
          description="The flexDirection property controls the direction of the flex container's children."
          code={`// Row (default)
<View style={{ flexDirection: 'row' }}>
  <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
</View>

// Column
<View style={{ flexDirection: 'column' }}>
  <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
</View>`}
        >
          <View>
            <Text style={styles.demoLabel}>Row (Default)</Text>
            <View style={styles.flexDirectionRow}>
              <View style={[styles.box, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.box, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.box, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={[styles.demoLabel, { marginTop: 20 }]}>Column</Text>
            <View style={styles.flexDirectionColumn}>
              <View style={[styles.box, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.box, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.box, { backgroundColor: "#4CAF50" }]} />
            </View>
          </View>
        </LayoutExample>

        {/* Justify Content */}
        <LayoutExample
          title="Justify Content"
          description="The justifyContent property aligns children along the main axis of their container."
          code={`<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
</View>`}
        >
          <View style={styles.justifyContentDemo}>
            <Text style={styles.demoLabel}>flex-start</Text>
            <View
              style={[
                styles.justifyContentContainer,
                { justifyContent: "flex-start" },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={styles.demoLabel}>center</Text>
            <View
              style={[
                styles.justifyContentContainer,
                { justifyContent: "center" },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={styles.demoLabel}>flex-end</Text>
            <View
              style={[
                styles.justifyContentContainer,
                { justifyContent: "flex-end" },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={styles.demoLabel}>space-between</Text>
            <View
              style={[
                styles.justifyContentContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={styles.demoLabel}>space-around</Text>
            <View
              style={[
                styles.justifyContentContainer,
                { justifyContent: "space-around" },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.smallBox, { backgroundColor: "#4CAF50" }]} />
            </View>
          </View>
        </LayoutExample>

        {/* Align Items */}
        <LayoutExample
          title="Align Items"
          description="The alignItems property aligns children along the cross axis of their container."
          code={`<View style={{ flexDirection: 'row', height: 100, alignItems: 'center' }}>
  <View style={{ width: 50, height: 30, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
  <View style={{ width: 50, height: 70, backgroundColor: 'green' }} />
</View>`}
        >
          <View style={styles.alignItemsDemo}>
            <Text style={styles.demoLabel}>
              stretch (default with no height)
            </Text>
            <View
              style={[styles.alignItemsContainer, { alignItems: "stretch" }]}
            >
              <View
                style={[styles.stretchBox, { backgroundColor: "#FF5252" }]}
              />
              <View
                style={[styles.stretchBox, { backgroundColor: "#2196F3" }]}
              />
              <View
                style={[styles.stretchBox, { backgroundColor: "#4CAF50" }]}
              />
            </View>

            <Text style={styles.demoLabel}>flex-start</Text>
            <View
              style={[styles.alignItemsContainer, { alignItems: "flex-start" }]}
            >
              <View
                style={[
                  styles.varHeightBox,
                  { height: 30, backgroundColor: "#FF5252" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 50, backgroundColor: "#2196F3" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 70, backgroundColor: "#4CAF50" },
                ]}
              />
            </View>

            <Text style={styles.demoLabel}>center</Text>
            <View
              style={[styles.alignItemsContainer, { alignItems: "center" }]}
            >
              <View
                style={[
                  styles.varHeightBox,
                  { height: 30, backgroundColor: "#FF5252" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 50, backgroundColor: "#2196F3" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 70, backgroundColor: "#4CAF50" },
                ]}
              />
            </View>

            <Text style={styles.demoLabel}>flex-end</Text>
            <View
              style={[styles.alignItemsContainer, { alignItems: "flex-end" }]}
            >
              <View
                style={[
                  styles.varHeightBox,
                  { height: 30, backgroundColor: "#FF5252" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 50, backgroundColor: "#2196F3" },
                ]}
              />
              <View
                style={[
                  styles.varHeightBox,
                  { height: 70, backgroundColor: "#4CAF50" },
                ]}
              />
            </View>
          </View>
        </LayoutExample>

        {/* Flex property */}
        <LayoutExample
          title="Flex"
          description="The flex property makes components expand to fill available space or shrink to avoid overflow."
          code={`<View style={{ flexDirection: 'row', height: 100 }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'blue' }} />
  <View style={{ flex: 1, backgroundColor: 'green' }} />
</View>`}
        >
          <View>
            <Text style={styles.demoLabel}>flex: 1 (equal distribution)</Text>
            <View style={styles.flexEqual}>
              <View style={[styles.flexBox, { backgroundColor: "#FF5252" }]} />
              <View style={[styles.flexBox, { backgroundColor: "#2196F3" }]} />
              <View style={[styles.flexBox, { backgroundColor: "#4CAF50" }]} />
            </View>

            <Text style={[styles.demoLabel, { marginTop: 15 }]}>
              flex: 1 : 2 : 1 (proportional)
            </Text>
            <View style={styles.flexProportion}>
              <View
                style={[
                  styles.flexBox,
                  { flex: 1, backgroundColor: "#FF5252" },
                ]}
              />
              <View
                style={[
                  styles.flexBox,
                  { flex: 2, backgroundColor: "#2196F3" },
                ]}
              />
              <View
                style={[
                  styles.flexBox,
                  { flex: 1, backgroundColor: "#4CAF50" },
                ]}
              />
            </View>
          </View>
        </LayoutExample>

        {/* Styling in React Native */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Styling in React Native</Text>
          <Text style={styles.sectionDescription}>
            React Native uses JavaScript to style your components. Styles are
            defined using StyleSheet.create().
          </Text>
        </View>

        {/* StyleSheet Example */}
        <LayoutExample
          title="StyleSheet Object"
          description="StyleSheet provides an optimized way to create and manage styles."
          code={`const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Usage
<View style={styles.container}>
  <Text style={styles.text}>Styled Text</Text>
</View>`}
        >
          <View style={styles.styleSheetDemo}>
            <Text style={styles.styleSheetTitle}>
              StyleSheet.create() Benefits:
            </Text>
            <View style={styles.benefitContainer}>
              <Text style={styles.benefitText}>
                • Validates styles at compile time
              </Text>
              <Text style={styles.benefitText}>
                • Optimizes style objects for better performance
              </Text>
              <Text style={styles.benefitText}>
                • Improves code organization and readability
              </Text>
            </View>
          </View>
        </LayoutExample>

        {/* Common Style Properties */}
        <LayoutExample
          title="Common Style Properties"
          description="React Native provides many style properties similar to CSS."
          code={`// Text styling
<Text style={{
  color: '#333',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 10,
}}>
  Styled Text
</Text>

// View styling
<View style={{
  backgroundColor: '#eee',
  borderRadius: 8,
  padding: 15,
  margin: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2, // Android shadow
}}>
  <Text>Styled View</Text>
</View>`}
        >
          <View style={styles.commonStylesDemo}>
            {/* Text styling example */}
            <Text style={styles.styledText}>Styled Text</Text>

            {/* View styling example */}
            <View style={styles.styledView}>
              <Text>Styled View with Shadow and Border Radius</Text>
            </View>

            {/* Image styling example */}
            <View style={styles.imageStyleContainer}>
              <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={styles.styledImage}
              />
              <Text style={styles.imageCaption}>Styled Image</Text>
            </View>
          </View>
        </LayoutExample>
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
  section: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  exampleContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exampleDescription: {
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
  demoLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  smallBox: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  varHeightBox: {
    width: 30,
    borderRadius: 4,
  },
  stretchBox: {
    width: 30,
    borderRadius: 4,
  },
  flexBox: {
    flex: 1,
    height: 40,
    borderRadius: 4,
  },
  flexDirectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  flexDirectionColumn: {
    flexDirection: "column",
    height: 180,
    justifyContent: "space-between",
  },
  justifyContentDemo: {
    width: "100%",
  },
  justifyContentContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    height: 50,
    marginBottom: 15,
    padding: 5,
    borderRadius: 4,
  },
  alignItemsDemo: {
    width: "100%",
  },
  alignItemsContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    height: 100,
    marginBottom: 15,
    padding: 5,
    borderRadius: 4,
  },
  flexEqual: {
    flexDirection: "row",
    height: 40,
  },
  flexProportion: {
    flexDirection: "row",
    height: 40,
  },
  styleSheetDemo: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    width: "100%",
  },
  styleSheetTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  benefitContainer: {
    marginLeft: 10,
  },
  benefitText: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  commonStylesDemo: {
    width: "100%",
    alignItems: "center",
  },
  styledText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  styledView: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 15,
    margin: 10,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  imageStyleContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  styledImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#2196F3",
  },
  imageCaption: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});
