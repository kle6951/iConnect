import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../app/config/colors";
import Card from "../components/Card";
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
const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings} // Pass data prop correctly
        keyExtractor={(item) => item.id.toString()} // Use item.id
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.screenWhite,
  },
});

export default HomeScreen;