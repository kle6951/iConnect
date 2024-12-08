import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../AppText";

const PostHeader = ({ avatar, username, createdAt }) => {
  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleString() 
    : "No timestamp available";

  return (
    <View style={styles.header}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <AppText style={styles.username}>{username}</AppText>
        <AppText style={styles.timestamp}>{formattedTime}</AppText>
      </View>
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
  textContainer: {
    flexDirection: "column", // This will stack the text vertically
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "black",
    marginTop: 2,
  },
});

export default PostHeader;