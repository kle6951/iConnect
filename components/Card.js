import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../app/config/colors";
import AppText from "./AppText";

function Card({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailedContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  description:{

  },
  detailedContainer: {
    // will implement later for long description holder
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
});

export default Card;
