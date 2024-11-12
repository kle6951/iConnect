import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function CreateButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="pluscircle" size={60} color={colors.primary} />
    </TouchableOpacity>
  );
}

export default CreateButton;
