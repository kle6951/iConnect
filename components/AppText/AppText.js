import React from "react";
import { Text, StyleSheet } from "react-native";
import styles from "./styles";

function AppText({ children, style }) {
    // making an array[styles.text, style] to have additional style
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
