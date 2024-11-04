import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import colors from "../app/config/colors";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";

function ListButton({ title, onPress, width = "35%", icon = null, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width }, style]}
    >
      <View style={styles.row}>
        <AppText style={styles.text}>{title}</AppText>
        {icon && (
          <AntDesign name={icon} color={colors.primary} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenWhite,
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 2,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
});

export default ListButton;