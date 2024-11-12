import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/cards/Card";
import colors from "../config/colors"; // Ensure colors are imported
import CreateButton from "../components/CreateButton";

// Temporary data
const listings = [
  {
    id: 1,
    title: "Nursing/ Accounting/ Japanese/ Textbooks for sale",
    description: "$10",
    image: require("../assets/textbook_02.jpg"),
  },
  {
    id: 2,
    title: "Economic Textbooks",
    description: "$5",
    image: require("../assets/oldTextbook.jpg"),
  },
];

const newlistings = [
  {
    id: 1,
    title: "Nursing/ Accounting/ Japanese/ Textbooks for sale",
    description: "$10",
    image: require("../assets/textbook_02.jpg"),
  },
  {
    id: 2,
    title: "Economic Textbooks",
    description: "$5",
    image: require("../assets/oldTextbook.jpg"),
  },
  {
    id: 3,
    title: "Finance Textbooks",
    description: "FREE",
    image: require("../assets/financeBooks.jpg"),
  },
];

function ListingItems({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(listings);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(newlistings);
      setRefreshing(false);
    }, 2000);
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
            descriptionStyle={styles.descriptionStyle}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />

      {/* CreateButton fixed at the bottom */}
      <View style={styles.createButtonContainer}>
        <CreateButton onPress={() => navigation.navigate("ListingEdit")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up full screen height
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
  descriptionStyle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  // Adjusted the createButtonContainer to ensure it stays at the bottom of the screen
  createButtonContainer: {
    position: "absolute", // Absolute positioning for the button
    bottom: 10, // Distance from the bottom of the screen
    right: 10, // Distance from the right side of the screen
    zIndex: 1, // Ensures the button is above other elements
  },
});

export default ListingItems;