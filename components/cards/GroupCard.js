import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../../app/config/colors";
import AppText from "../AppText";

function GroupCard({ image, groupName }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <AppText style={styles.groupName}>{groupName}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
    overflow: "hidden", // Ensures rounded corners for the image and the container
  },
  groupName: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute", // Ensure the image is the background
    top: 0,
    left: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire image
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark transparent shade (50% opacity)
  },
  textContainer: {
    flex: 1, // This will take up the same space as the image
    justifyContent: "center", // Horizontally center the text
  },
});

export default GroupCard;
