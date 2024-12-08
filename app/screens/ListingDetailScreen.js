import React, { useState } from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems/ListItem";
import PostCaption from "../components/Post/PostCaption";
import CloseIcon from "../components/Post/CloseIcon";

function ListingDetailScreen({ route, navigation }) {
  const { item } = route.params;
  const images = JSON.parse(item.images); // Array of image objects

  const [currentIndex, setCurrentIndex] = useState(0);

  const { width } = Dimensions.get("window"); // Get the screen width for full-width images

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width); // Adjust index based on screen width
    setCurrentIndex(index);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <CloseIcon onPress={handleClose} />
        <FlatList
          data={images}
          horizontal
          pagingEnabled // Enables snapping to each photo
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item?.url }} style={[styles.image, { width }]} />
          )}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
        />
        {images && images.length > 0 && (
          <View style={styles.indexContainer}>
            <AppText style={styles.indexText}>
              {currentIndex + 1} / {images.length}
            </AppText>
          </View>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{"$" + item.price}</AppText>
        {item.description && (
          <View style={styles.postBox}>
            <PostCaption caption={item.description} />
          </View>
        )}
        <View style={styles.userContainer}>
          <ListItem
            image={
              item.user_avatar
                ? { uri: JSON.parse(item.user_avatar)[0]?.url }
                : require("../assets/images/studentProfile.jpeg")
            }
            title={item.user_name || "Unknown User"}
            description={item.user_listing_count + " Listing(s)"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  image: {
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  postBox: {
    padding: 5,
    backgroundColor: colors.screenWhite,
    borderRadius: 10,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
  indexContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  indexText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default ListingDetailScreen;