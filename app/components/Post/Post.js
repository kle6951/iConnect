import React from "react";
import { View, StyleSheet } from "react-native";
import PostHeader from "./PostHeader";
import PostCaption from "./PostCaption";
import PostPhotos from "./PostPhotos";
import colors from "../../config/colors";

const Post = ({ user, caption, photos }) => {
  return (
    <View style={styles.container}>
      <PostHeader avatar={user.avatar} username={user.name} />
      <PostCaption caption={caption} />
      {photos && <PostPhotos photos={photos} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default Post;
