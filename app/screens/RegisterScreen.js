import React, { useState } from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { StyleSheet, Alert } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, apostrophes, and hyphens"
    )
    .min(5, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters")
    .label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    const { name, email, password } = values;

    const response = await authApi.register(name, email, password);

    setLoading(false);

    if (response.ok) {
      // Successful registration
      Alert.alert(
        "Registration Successful",
        "You have been registered successfully!"
      );
    } else {
      // Error handling
      Alert.alert("Registration Error", response.error);
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="default"
          name="name"
          textContentType="name"
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          name="email"
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton
          title={loading ? "Registering..." : "Register"}
          disabled={loading}
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;