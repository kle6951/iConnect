import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MyListCard({ image, title, onPress, onDelete }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can"
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18,
    textAlign: "left",
  },
  deleteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 20,
  },
});

export default MyListCard;
