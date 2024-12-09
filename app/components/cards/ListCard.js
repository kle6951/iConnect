import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function ListCard({ image, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18,
    textAlign: "center", // Default to center
  },
});

export default ListCard;
