import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import * as Yup from "yup";

// Define validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name can only contain letters")
    .min(2, "First name must be at least 2 characters long")
    .label("FirstName"),

  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z]+$/, "Last name can only contain letters")
    .min(2, "Last name must be at least 2 characters long")
    .label("LastName"),

  studentID: Yup.string()
    .required("Student ID is required")
    .matches(/^[0-9]{9}$/, "Student ID must be exactly 9 digits")
    .label("StudentID"),

  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email address")
    .label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function UserInfoScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          firstName: "",
          lastName: "",
          studentID: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="First Name"
          icon="account"
          name="firstName"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Last Name"
          icon="account"
          name="lastName"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Student ID"
          icon="card-account-details"
          name="studentID"
          keyboardType="numeric"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
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
        <SubmitButton title="Update" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default UserInfoScreen;
