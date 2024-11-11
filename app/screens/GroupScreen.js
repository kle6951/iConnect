import React from "react";
import GroupCard from "../components/cards/GroupCard";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

const groupListing = [
  {
    id: 1,
    groupName: "Mount Royal Skiing Club",
    image: require("../assets/SkiClub.jpg"),
  },
  {
    id: 2,
    groupName: "International Student Club",
    image: require("../assets/internationalClub.jpg"),
  },
  {
    id: 3,
    groupName: "MRU Gaming Club",
    image: require("../assets/gamingClub.webp"),
  },
  {
    id: 4,
    groupName: "Computing Alliance of Mount Royal University",
    image: require("../assets/computingAlliance.png"),
  },
  {
    id: 5,
    groupName: "Women In Business",
    image: require("../assets/womenInBusiness.webp"),
  },
  {
    id: 6,
    groupName: "Society of Broadcasting",
    image: require("../assets/broadcastingSociety.jpg"),
  },
  {
    id: 7,
    groupName: "MRU Smash",
    image: require("../assets/smashClub.jpeg"),
  },
];

function GroupScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={groupListing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GroupCard groupName={item.groupName} image={item.image} />
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
