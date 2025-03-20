import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Keyboard,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// Define interfaces for form data and errors
interface FormData {
  name: string;
  email: string;
  password: string;
  description: string;
  agreeToTerms: boolean;
  selectedLanguage: string;
  selectedGender: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
  [key: string]: string; // Index signature to allow dynamic key access
}

export default function UserInputScreen() {
  // State for form inputs
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    description: "",
    agreeToTerms: false,
    selectedLanguage: "javascript",
    selectedGender: "",
  });

  // State for form validation
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // Handle keyboard showing/hiding
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Update form data
  const updateFormData = (key: keyof FormData, value: string | boolean) => {
    setFormData({
      ...formData,
      [key]: value,
    });

    // Clear error when user types
    if (errors[key]) {
      setErrors({
        ...errors,
        [key]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    Keyboard.dismiss();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        Alert.alert("Form Submitted", "Thank you for your submission!", [
          { text: "OK" },
        ]);
      }, 1500);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>User Input</Text>
            <Text style={styles.headerSubtitle}>
              Learn about different input components in React Native
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Form Controls</Text>

            {/* TextInput - Single line */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[
                  styles.textInput,
                  errors.name ? styles.inputError : null,
                ]}
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(text) => updateFormData("name", text)}
              />
              {errors.name ? (
                <Text style={styles.errorText}>{errors.name}</Text>
              ) : null}
            </View>

            {/* TextInput - Email with keyboard type */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.textInput,
                  errors.email ? styles.inputError : null,
                ]}
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(text) => updateFormData("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            {/* TextInput - Password with secure text entry */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={[
                  styles.textInput,
                  errors.password ? styles.inputError : null,
                ]}
                placeholder="Enter your password"
                value={formData.password}
                onChangeText={(text) => updateFormData("password", text)}
                secureTextEntry
              />
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            {/* TextInput - Multiline */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.textInput, styles.multilineInput]}
                placeholder="Tell us about yourself"
                value={formData.description}
                onChangeText={(text) => updateFormData("description", text)}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            {/* Gender Radio-like Buttons */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    formData.selectedGender === "male" && styles.radioSelected,
                  ]}
                  onPress={() => updateFormData("selectedGender", "male")}
                >
                  <Text style={styles.radioText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    formData.selectedGender === "female" &&
                      styles.radioSelected,
                  ]}
                  onPress={() => updateFormData("selectedGender", "female")}
                >
                  <Text style={styles.radioText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    formData.selectedGender === "other" && styles.radioSelected,
                  ]}
                  onPress={() => updateFormData("selectedGender", "other")}
                >
                  <Text style={styles.radioText}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Picker for selecting programming language */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Favorite Programming Language</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedLanguage}
                  onValueChange={(itemValue: string) =>
                    updateFormData("selectedLanguage", itemValue)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="JavaScript" value="javascript" />
                  <Picker.Item label="Python" value="python" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="C++" value="cpp" />
                  <Picker.Item label="Swift" value="swift" />
                  <Picker.Item label="Kotlin" value="kotlin" />
                </Picker>
              </View>
            </View>

            {/* Switch for agreement */}
            <View style={styles.inputGroup}>
              <View style={styles.switchContainer}>
                <Switch
                  value={formData.agreeToTerms}
                  onValueChange={(value) =>
                    updateFormData("agreeToTerms", value)
                  }
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={formData.agreeToTerms ? "#2196F3" : "#f4f3f4"}
                />
                <Text style={styles.switchLabel}>
                  I agree to the terms and conditions
                </Text>
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={[
                styles.submitButton,
                (!formData.agreeToTerms || isSubmitting) &&
                  styles.disabledButton,
              ]}
              onPress={handleSubmit}
              disabled={!formData.agreeToTerms || isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.submitButtonText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Input Component Reference</Text>

            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>TextInput</Text>
              <Text style={styles.infoText}>
                - Use for text entry{"\n"}- Supports single-line and multi-line
                modes{"\n"}- Can customize keyboard type and behavior{"\n"}-
                Controllable with state (controlled component)
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>Switch</Text>
              <Text style={styles.infoText}>
                - Toggle between two states (on/off){"\n"}- Good for boolean
                selections{"\n"}- Platform-specific styling
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>Picker</Text>
              <Text style={styles.infoText}>
                - Dropdown menu for selecting from a list{"\n"}- Native
                implementation on each platform{"\n"}- Must be imported from
                @react-native-picker/picker
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>Button</Text>
              <Text style={styles.infoText}>
                - Basic button component{"\n"}- Limited styling options{"\n"}-
                For more customization, use TouchableOpacity
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>TouchableOpacity</Text>
              <Text style={styles.infoText}>
                - Highly customizable button alternative{"\n"}- Provides
                feedback via opacity change{"\n"}- Can wrap any component to
                make it touchable
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  formContainer: {
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
    marginBottom: 15,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inputError: {
    borderColor: "#FF5252",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 12,
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  submitButton: {
    backgroundColor: "#2196F3",
    borderRadius: 4,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#B0BEC5",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    marginTop: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  infoSection: {
    marginBottom: 15,
  },
  infoSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  radioSelected: {
    backgroundColor: "#e3f2fd",
    borderColor: "#2196F3",
  },
  radioText: {
    color: "#555",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fafafa",
  },
  picker: {
    height: 50,
  },
});
