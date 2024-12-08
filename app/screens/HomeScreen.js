import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Post from "../components/Post/Post";
import PostBox from "../components/Post/PostBox";
import postsApi from "../api/posts";
import useApi from "../hooks/useApi";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

const HomeScreen = () => {
  const getPostsApi = useApi(postsApi.getPosts);

  useEffect(() => {
    getPostsApi.request();
  }, []);

  return (
    <Screen style={styles.container}>
      <PostBox onPostSubmit={() => console.log("submit post")} />
      {getPostsApi.error && (
        <>
          <AppText>Couldn't retrieve the posts</AppText>
          <Button
            title="Retry"
            onPress={getPostsApi.request} // Retry fetching data
          />
        </>
      )}
      <ActivityIndicator visible={getPostsApi.loading} />
      <FlatList
        data={getPostsApi.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const images = JSON.parse(item.images);
          const imageURL = images[0]?.url;

          const avatarImage = item.user_avatar
            ? { uri: JSON.parse(item.user_avatar)[0]?.url }
            : require("../assets/images/studentProfile.jpeg");

          return (
            <Post
              user={{
                name: item.user_name,
                avatar: avatarImage,
              }}
              caption={item.caption}
              photos={images}
            />
          );
        }}
        contentContainerStyle={styles.flatListContent}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
