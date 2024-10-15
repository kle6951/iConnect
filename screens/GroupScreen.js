import React from "react";
import GroupCard from "../components/GroupCard";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

const groupListing = [
  {
    id: 1,
    groupName: "Mount Royal Skiing Club",
    image: require("../app/assets/SkiClub.jpg"),
  },
  {
    id: 2,
    groupName: "International Student Club",
    image: require("../app/assets/internationalClub.jpg"),
  },
  {
    id: 3,
    groupName: "MRU Gaming Club",
    image: require("../app/assets/gamingClub.webp"),
  },
  {
    id: 4,
    groupName: "Computing Alliance of Mount Royal University",
    image: require("../app/assets/computingAlliance.png"),
  },
  {
    id: 5,
    groupName: "Women In Business",
    image: require("../app/assets/womenInBusiness.webp"),
  },
  {
    id: 6,
    groupName: "Society of Broadcasting",
    image: require("../app/assets/broadcastingSociety.jpg"),
  },
  {
    id: 7,
    groupName: "MRU Smash",
    image: require("../app/assets/smashClub.jpeg"),
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
    padding: 10,
  },
});

export default GroupScreen;
