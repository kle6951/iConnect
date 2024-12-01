import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import GroupCard from "../components/cards/GroupCard";

const marketListing = [
  {
    id: 1,
    groupName: "Textbook Market",
    image: require("../assets/images/textbook.jpg"),
  },
  {
    id: 2,
    groupName: "Find My Housemate",
    image: require("../assets/images/accomodation.jpg"),
  },
  {
    id: 3,
    groupName: "Explore Clubs",
    image: require("../assets/images/studentClubs.jpg"),
  },
];

function MarketScreen({ navigation }) {
  const navigateToListing = (groupName) => {
    if (groupName === "Textbook Market") {
      navigation.navigate("ListingItems"); // Navigate to ListingItems
    } else if (groupName === "Find My Housemate") {
      navigation.navigate("ListingRoomate"); // Navigate to ListingRoomate
    } else if (groupName == "Explore Clubs") {
      navigation.navigate("GroupListings"); // Navigate to GroupListings
    }
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={marketListing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GroupCard
            groupName={item.groupName}
            image={item.image}
            onPress={() => navigateToListing(item.groupName)} // Updated onPress
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

export default MarketScreen;
