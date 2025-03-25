import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
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
    backgroundColor: "#4CAF50",
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
    margin: 10,
    padding: 15,
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
    marginBottom: 10,
    color: "#333",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  exampleContainer: {
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
  exampleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  exampleDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  demoContainer: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 15,
  },
  demoLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#666",
  },
  codeButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 12,
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
    borderRadius: 4,
    marginTop: 10,
  },
  codeText: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
    color: "#333",
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
    width: 40,
    borderRadius: 4,
  },
  flexDirectionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
  },
  flexDirectionColumn: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
  },
  justifyContentDemo: {
    width: "100%",
  },
  justifyContentContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    height: 50,
    alignItems: "center",
  },
  alignItemsDemo: {
    width: "100%",
  },
  alignItemsContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    height: 100,
    justifyContent: "space-around",
  },
});
