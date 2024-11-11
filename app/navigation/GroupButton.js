import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function GroupButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="upcircle" color={"#ffff"} size={45} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: "#ffff",
    borderWidth: 10,
    borderRadius: 40,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default GroupButton;
