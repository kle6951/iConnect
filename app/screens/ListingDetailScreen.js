import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems/ListItem";

function ListingDetailScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        source={listing.image}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>{listing.description}</AppText>
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
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});
export default ListingDetailScreen;
