import React from "react";
import ListCard from "../components/cards/ListCard";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

const groupListing = [
  {
    id: 1,
    title: "Mount Royal Skiing Club",
    image: require("../assets/images/SkiClub.jpg"),
  },
  {
    id: 2,
    title: "International Student Club",
    image: require("../assets/images/internationalClub.jpg"),
  },
  {
    id: 3,
    title: "MRU Gaming Club",
    image: require("../assets/images/gamingClub.webp"),
  },
  {
    id: 4,
    title: "Computing Alliance of Mount Royal University",
    image: require("../assets/images/computingAlliance.png"),
  },
  {
    id: 5,
    title: "Women In Business",
    image: require("../assets/images/womenInBusiness.webp"),
  },
  {
    id: 6,
    title: "Society of Broadcasting",
    image: require("../assets/images/broadcastingSociety.jpg"),
  },
  {
    id: 7,
    title: "MRU Smash",
    image: require("../assets/images/smashClub.jpeg"),
  },
];

function GroupScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={groupListing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard title={item.title} image={item.image} />
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

export default GroupScreen;
