import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../components/AppText/AppTextInput";
import SubmitButton from "../components/forms/SubmitButton";
import { AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .label("Password"),
});

function TestScreen() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <View style={styles.inputContainer}>
              <AppFormField
                name="email" // Field name in Formik
                placeholder="Email"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email" // Example icon (optional)
              />
            </View>

            <View style={styles.inputContainer}>
              <AppFormField
                name="password" // Field name in Formik
                placeholder="Password"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                icon="lock" // Example icon (optional)
              />
            </View>

            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default TestScreen;