import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems/ListItem";

function ListingDetailScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <AppText style={styles.description}>{listing.description}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/studentProfile.jpeg")}
            title={"Josh Benjamin"}
            description={"5 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
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
    color: colors.primary, // Set the price color to blue (assuming colors.primary is blue)
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  description: {
    color: colors.darkGray, // Set the description text to a darker color (e.g., gray)
    fontSize: 16,
    marginVertical: 5,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailScreen;