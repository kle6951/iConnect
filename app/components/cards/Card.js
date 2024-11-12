import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function Card({ title, description, image, descriptionStyle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailedContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText
            style={[styles.description, descriptionStyle]}
            numberOfLines={5}
          >
            {description}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  description: {},
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
