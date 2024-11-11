import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/styles";

function AppText({ children, style, ...otherProps }) {
  // making an array[styles.text, style] to have additional style
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
