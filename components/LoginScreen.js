import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";

/* Use Formik to reduce code the complexity when handling multiple text input
so we can remove useState */

/* Object/data validation using yup */
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../app/assets/temporaryLogo.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
