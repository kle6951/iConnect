import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/cards/Card";
import colors from "../config/colors"; // Make sure colors are imported

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
            onPress={() => navigation.navigate("ListingDetails", item)
            } 
          />
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
}

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
