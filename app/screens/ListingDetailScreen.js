import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems/ListItem";
import PostCaption from "../components/Post/PostCaption";
import CloseIcon from "../components/Post/CloseIcon";

function ListingDetailScreen({ route, navigation }) {
  const { item } = route.params;
  const images = JSON.parse(item.images);
  const imageURL = images[0]?.url;

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.imageContainer}>
        <CloseIcon
          onPress={handleClose} // This triggers navigation.goBack() on press
        />
        <Image style={styles.image} source={{ uri: imageURL }} />
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
            description={item.user_email}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
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
});

export default ListingDetailScreen;
