import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import colors from "../../config/colors";

const PostBox = ({ onPostSubmit }) => {
  const [postText, setPostText] = useState("");

  const handlePostSubmit = () => {
    if (postText.trim()) {
      const newPost = {
        user: {
          name: "Your Name", 
          avatar: require("../../assets/studentProfile.jpeg"), 
        },
        caption: postText,
        photos: [],  
      };
      onPostSubmit(newPost);  // Pass new post back to the parent
      setPostText("");  // Reset input after submission
    } else {
      alert("Please write something before posting!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Share your exiciting news"
        value={postText}
        onChangeText={setPostText}
        multiline
      />
      <Button title="Post" onPress={handlePostSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default PostBox;