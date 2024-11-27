import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../AppText";

const PostHeader = ({ avatar, username }) => {
  return (
    <View style={styles.header}>
      <Image source={avatar} style={styles.avatar} />
      <AppText style={styles.username}>{username}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PostHeader;
