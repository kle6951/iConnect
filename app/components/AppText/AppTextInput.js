import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function AppTextInput({
  icon,
  width = "100%",
  scrollEnabled = false,
  multilineEnabled = false,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        multiline={multilineEnabled}
        scrollEnabled={scrollEnabled}
        placeholderTextColor={defaultStyles.colors.grey}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
