import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import MyListCard from "../components/cards/MyListCard";
import Icon from "../components/Icon";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const MyRoomateListings = () => {
  const listings = [
    {
      id: 1,
      title: "Listing 1",
      image: require("../assets/images/textbook.jpg"),
    },
    {
      id: 2,
      title: "Listing 2",
      image: require("../assets/images/textbook.jpg"),
    },
  ];
  return (
    <Screen style={styles.container}>
      {listings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <AppText style={styles.emptyText}>Your listing is empty</AppText>
          <Icon
            name="trash"
            size={200}
            iconColor={colors.grey}
            ComponentName={Ionicons}
            backgroundColor={colors.screenWhite}
            style={styles.icon}
          />
        </View>
      ) : (
        <>
          <AppText style={styles.text}>
            You currently have {listings.length} listing(s):
          </AppText>
          <FlatList
            data={listings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MyListCard title={item.title} image={item.image} />
            )}
          />
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  emptyText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: -20,
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: 40,
    zIndex: 0,
  },
});

export default MyRoomateListings;
