import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

const PostPhotos = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / 200);
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        data={photos}
        horizontal
        pagingEnabled // Enables snapping to each photo
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={item} style={styles.photo} />}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      {photos && photos.length > 0 && (
        <View style={styles.indexContainer}>
          <AppText style={styles.indexText}>
            {currentIndex + 1} / {photos.length}
          </AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 10,
  },
  indexContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  indexText: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default PostPhotos;
