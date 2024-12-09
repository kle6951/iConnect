import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListCard from "../components/cards/ListCard";

const activityListing = [
  {
    id: 1,
    title: "Textbook Market",
    image: require("../assets/images/textbook.jpg"),
  },
  {
    id: 2,
    title: "Find My Housemate",
    image: require("../assets/images/accomodation.jpg"),
  },
  {
    id: 3,
    title: "Explore Clubs",
    image: require("../assets/images/studentClubs.jpg"),
  },
];

function ActivityScreen({ navigation }) {
  const navigateToListing = (title) => {
    if (title === "Textbook Market") {
      navigation.navigate("ListingItems"); // Navigate to ListingItems
    } else if (title === "Find My Housemate") {
      navigation.navigate("ListingRoomate"); // Navigate to ListingRoomate
    } else if (title == "Explore Clubs") {
      navigation.navigate("GroupListings"); // Navigate to GroupListings
    }
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={activityListing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            image={item.image}
            onPress={() => navigateToListing(item.title)} // Updated onPress
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default ActivityScreen;
