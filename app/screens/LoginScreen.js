import React, { useState } from "react";
import { StyleSheet, Image, Alert } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import authApi from "../api/auth";

/* Use Formik to reduce code the complexity when handling multiple text input
so we can remove useState */

/* Object/data validation using yup */
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleLogin = async (userInfo) => {
    const { email, password } = userInfo;
    try {
      const response = await authApi.login(email, password);
      if (!response.ok) {
        setLoginFailed(true);
        Alert.alert(
          "Login Failed",
          response.error || "Invalid email or password"
        );
        return;
      }
      // Will navigate here
      setLoginFailed(false);
      Alert.alert("Login Successful", "Welcome back!");
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("An unexpected error occurred.");
    }
  };
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/Logo.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
