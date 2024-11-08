import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/cards/Card";
import colors from "../app/config/colors"; // Make sure colors are imported

// Temporary data
const listings = [
  {
    id: 1,
    title: "Nursing/ Accounting/ Japanese/ Textbooks for sale",
    description: "$10",
    image: require("../app/assets/textbook_02.jpg"),
  },
  {
    id: 2,
    title: "Economic Textbooks",
    description: "$5",
    image: require("../app/assets/oldTextbook.jpg"),
  },
];

const newlistings = [
  {
    id: 1,
    title: "Nursing/ Accounting/ Japanese/ Textbooks for sale",
    description: "$10",
    image: require("../app/assets/textbook_02.jpg"),
  },
  {
    id: 2,
    title: "Economic Textbooks",
    description: "$5",
    image: require("../app/assets/oldTextbook.jpg"),
  },
  {
    id: 3,
    title: "Finance Textbooks",
    description: "FREE",
    image: require("../app/assets/financeBooks.jpg"),
  },
];

const ListingItems = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(listings);

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulating a network request
    setTimeout(() => {
      setData(newlistings); // Update the listings to new listings
      setRefreshing(false); // Stop the refreshing state
    }, 2000); // Adjust the delay as needed
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
            descriptionStyle={styles.descriptionStyle} // Add descriptionStyle here
          />
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
  descriptionStyle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListingItems;
