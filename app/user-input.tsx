import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput,
  Switch,
  Button,
  TouchableOpacity,
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
        Alert.alert(
          "Form Submitted",
          `Thank you for your submission!\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Description: ${formData.description || "Not provided"}\n` +
            `Gender: ${formData.selectedGender || "Not selected"}\n` +
            `Programming Language: ${formData.selectedLanguage}\n` +
            `Agreed to Terms: ${formData.agreeToTerms ? "Yes" : "No"}`,
          [{ text: "OK", onPress: () => console.log("Form data:", formData) }]
        );
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
                secureTextEntry={true}
              />
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            {/* TextInput - Multiline */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.textArea]}
                placeholder="Tell us about yourself"
                value={formData.description}
                onChangeText={(text) => updateFormData("description", text)}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            {/* Switch */}
            <View style={styles.switchGroup}>
              <Text style={styles.label}>Agree to Terms & Conditions</Text>
              <Switch
                value={formData.agreeToTerms}
                onValueChange={(value) => updateFormData("agreeToTerms", value)}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={formData.agreeToTerms ? "#2196F3" : "#f4f3f4"}
              />
            </View>

            {/* Picker (Dropdown) */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Favorite Programming Language</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.selectedLanguage}
                  onValueChange={(value) =>
                    updateFormData("selectedLanguage", value)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="JavaScript" value="javascript" />
                  <Picker.Item label="Python" value="python" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="Swift" value="swift" />
                  <Picker.Item label="Kotlin" value="kotlin" />
                  <Picker.Item label="TypeScript" value="typescript" />
                </Picker>
              </View>
            </View>

            {/* Radio Buttons (implemented with TouchableOpacity) */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity
                  style={styles.radioOption}
                  onPress={() => updateFormData("selectedGender", "male")}
                >
                  <View
                    style={[
                      styles.radioButton,
                      formData.selectedGender === "male"
                        ? styles.radioButtonSelected
                        : null,
                    ]}
                  >
                    {formData.selectedGender === "male" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioLabel}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.radioOption}
                  onPress={() => updateFormData("selectedGender", "female")}
                >
                  <View
                    style={[
                      styles.radioButton,
                      formData.selectedGender === "female"
                        ? styles.radioButtonSelected
                        : null,
                    ]}
                  >
                    {formData.selectedGender === "female" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioLabel}>Female</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.radioOption}
                  onPress={() => updateFormData("selectedGender", "other")}
                >
                  <View
                    style={[
                      styles.radioButton,
                      formData.selectedGender === "other"
                        ? styles.radioButtonSelected
                        : null,
                    ]}
                  >
                    {formData.selectedGender === "other" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioLabel}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Submit Button */}
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  (isSubmitting || !formData.agreeToTerms) &&
                    styles.submitButtonDisabled,
                ]}
                onPress={handleSubmit}
                disabled={isSubmitting || !formData.agreeToTerms}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.submitButtonText}>Submit</Text>
                )}
              </TouchableOpacity>
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
    backgroundColor: "#9C27B0",
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
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
    color: "#333",
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
  },
  inputError: {
    borderColor: "#FF5252",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 14,
    marginTop: 5,
  },
  switchGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pickerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  picker: {
    height: 50,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#9C27B0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioButtonSelected: {
    borderColor: "#9C27B0",
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#9C27B0",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  submitButtonContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: "#9C27B0",
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#D1C4E9",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
