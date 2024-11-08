import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import colors from "../../app/config/colors";

function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <TouchableHighlight underlayColor={colors.screenWhite} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.detailedContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {description && (
            <AppText style={styles.description}>{description}</AppText>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: colors.white,
  },
  description: {
    color: colors.medium,
  },
  detailedContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
