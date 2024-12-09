import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, ScrollView, RefreshControl } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import MyListCard from "../components/cards/MyListCard";
import Icon from "../components/Icon";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import roomateListingsApi from "../api/roomateListings";

const MyRoomateListings = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const getListings = useApi(roomateListingsApi.getUserListings);
  useEffect(() => {
    getListings.request(1, 2, 3);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await getListings.request(1, 2, 3);
    setRefreshing(false);
  };

  return (
    <Screen style={styles.container}>
      {getListings.data.length === 0 ? (
        <ScrollView
          contentContainerStyle={styles.emptyContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          <AppText style={styles.emptyText}>Your listing is empty</AppText>
          <Icon
            name="trash"
            size={200}
            iconColor={colors.grey}
            ComponentName={Ionicons}
            backgroundColor={colors.screenWhite}
            style={styles.icon}
          />
        </ScrollView>
      ) : (
        <>
          <AppText style={styles.text}>
            You currently have {getListings.data.length} listing(s):
          </AppText>
          <FlatList
            data={getListings.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              const images = JSON.parse(item.images);
              const imageURL = images[0]?.url;
              return (
                <MyListCard
                  title={item.title}
                  image={imageURL}
                  onPress={() =>
                    navigation.navigate("MyListDetailScreen", { item })
                  }
                />
              );
            }}
            refreshing={refreshing}
            onRefresh={handleRefresh}
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
