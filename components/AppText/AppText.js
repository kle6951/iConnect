import React from "react";
import { Text } from "react-native";
import defaultStyles from "./styles";

function AppText({ children, style }) {
  // making an array[styles.text, style] to have additional style
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
