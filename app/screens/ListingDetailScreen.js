import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems/ListItem";
import PostCaption from "../components/Post/PostCaption";

function ListingDetailScreen({ route }) {
  const { item } = route.params;
  const images = JSON.parse(item.images);
  const imageURL = images[0]?.url;

  return (
    <View>
      <Image style={styles.image} source={{ uri: imageURL }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{"$" + item.price}</AppText>
        {item.description && (
          <View style={styles.postBox}>
            <PostCaption caption={item.description} />
          </View>
        )}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/images/studentProfile.jpeg")}
            title={"Josh Benjamin"}
            description={"5 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  postBox: {
    padding: 5,
    backgroundColor: colors.screenWhite,
    borderRadius: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailScreen;
