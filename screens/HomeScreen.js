import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import colors from "../app/config/colors";
import Card from "../components/cards/Card";
import Screen from "../components/Screen";

// Waiting for backend API. This is temporary data
const listings = [
  {
    id: 1,
    title: "MRU open house is coming soon",
    description: "A beautiful view of the MRU Campus.....",
    image: require("../app/assets/mruCampus.jpg"),
  },
  {
    id: 2,
    title: "New Club Events",
    description: "You are invited to attend.....",
    image: require("../app/assets/mruClub.webp"),
  },
  {
    id: 3,
    title: "Basketball Game Tonight 🔥",
    description: "Don't forget to come .....",
    image: require("../app/assets/MruGame.webp"),
  },
];

const newlistings = [
  {
    id: 1,
    title: "MRU open house is coming soon",
    description: "A beautiful view of the MRU Campus.....",
    image: require("../app/assets/mruCampus.jpg"),
  },
  {
    id: 2,
    title: "New Club Events",
    description: "You are invited to attend.....",
    image: require("../app/assets/mruClub.webp"),
  },
  {
    id: 3,
    title: "Basketball Game Tonight 🔥",
    description: "Don't forget to come .....",
    image: require("../app/assets/MruGame.webp"),
  },
  {
    id: 4,
    title: "NEW CLUB EVENT",
    description: "Don't forget to come .....",
    image: require("../app/assets/womenInBusiness.webp"),
  },
];

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(listings);

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulating a network request
    setTimeout(() => {
      setData(newlistings); // Update the listings to new listings
      setRefreshing(false); // Stop the refreshing state
    }, 2000); // You can adjust the delay as needed
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={data} // Use the state variable for data
        keyExtractor={(item) => item.id.toString()} // Use item.id
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        refreshing={refreshing} // Controlled refreshing state
        onRefresh={handleRefresh} // Attach the refresh handler
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
});

export default HomeScreen;
