import React, { useEffect} from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/cards/Card";
import colors from "../config/colors";
import CreateButton from "../components/CreateButton";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingItems({ navigation }) {
  const getListingAPI = useApi(listingApi.getListings);
  useEffect(() => {
    getListingAPI.request(1, 2, 3);
  }, []);
  return (
    <Screen style={styles.container}>
      {getListingAPI.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={getListingAPI.request(1, 2, 3)} />
        </>
      )}
      <ActivityIndicator visible={getListingAPI.loading} />
      <FlatList
        data={getListingAPI.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const images = JSON.parse(item.images); // Parse the images JSON string into an array
          const imageURL = images[0]?.url; // Access the URL of the first image

          return (
            <Card
              title={item.title}
              price={"$" + item.price}
              imageURL={imageURL}
              priceStyle={styles.priceStyle}
              onPress={() => navigation.navigate("ListingDetails", item)}
            />
          );
        }}
      />
      <View style={styles.createButtonContainer}>
        <CreateButton onPress={() => navigation.navigate("ListingEdit")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
  priceStyle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  // Adjusted the createButtonContainer to ensure it stays at the bottom of the screen
  createButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
});

export default ListingItems;
