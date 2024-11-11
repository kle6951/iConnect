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
    position: "absolute",
    left: "50%",
    bottom: -60, // Adjust this to move the button within the tab bar
    transform: [{ translateX: -40 }], // Center the button horizontally
    height: 80,
    width: 80,
    justifyContent: "center",
  },
});

export default GroupButton;