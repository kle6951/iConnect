import React, { useState, useRef } from "react";
import { Animated, FlatList, StyleSheet, View, Easing } from "react-native";
import Screen from "../components/Screen";
import GroupCard from "../components/cards/GroupCard";
import ListButton from "../components/ListButton";

const marketListing = [
  {
    id: 1,
    groupName: "Textbook Market",
    image: require("../assets/textbook.jpg"),
  },
  {
    id: 2,
    groupName: "Find My Housemate",
    image: require("../assets/accomodation.jpg"),
  },
];

const categories = ["Clubs", "Markets"];

function MarketScreen({ navigation }) {
  const [showCategories, setShowCategories] = useState(false);
  const slideAnim = useRef(new Animated.Value(-150)).current;

  const handlePress = () => {
    setShowCategories(!showCategories);
    Animated.timing(slideAnim, {
      toValue: showCategories ? -150 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  // MarketScreen.js
  // const handleGroupPress = (groupName) => {
  //   // Navigate to ListingItems with groupName as a parameter
  //   navigation.navigate("ListingItems", { groupName });
  // };

  return (
    <Screen style={styles.container}>
      <View style={styles.buttonRow}>
        <ListButton
          title="Categories"
          onPress={handlePress}
          icon="doubleright"
        />
        {showCategories && (
          <Animated.View
            style={[
              styles.animatedContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            {categories.map((category, index) => (
              <ListButton
                key={index}
                title={category}
                style={styles.listButton}
              />
            ))}
          </Animated.View>
        )}
      </View>
      <FlatList
        data={marketListing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GroupCard
            groupName={item.groupName}
            image={item.image}
            onPress={() => navigation.navigate("ListingItems", item)}
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
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  animatedContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  listButton: {
    marginHorizontal: 5,
  },
});
export default MarketScreen;
