import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Post from "../components/Post/Post";
import PostBox from "../components/Post/PostBox";

const samplePost = [
  {
    user: {
      name: "John Smith",
      avatar: require("../assets/studentProfile.jpeg"),
    },
    caption: `University Basketball Showdown 2024

🏀 Get Ready to Cheer for Your Team! 🏀
Join us for an electrifying basketball event where campus pride meets thrilling competition.

📅 Date: [Insert date]
⏰ Time: [Insert time]
📍 Venue: [Insert venue]

🔥 Highlights:
- High-energy games featuring [Team A vs. Team B/University teams].
- Half-time show with live performances.
- Food trucks and giveaways for fans.

🎟️ Admission: [Free/Ticket info here]
📢 Don’t miss out on the slam dunks, buzzer-beaters, and unforgettable moments!

📲 Stay updated: [Insert social media or event page link]

Let’s pack the stands and make it a night to remember!`,
    photos: [
      require("../assets/MruGame.webp"),
      require("../assets/mruCampus.jpg"),
      require("../assets/basketballGame.webp"),
    ],
  },
  {
    user: {
      name: "David Jones",
      avatar: require("../assets/studentProfile_02.jpg"),
    },
    caption: `Amazing Campus Event 2024

🎉 Come celebrate with us as we mark another fantastic year of success!

📅 Date: [Insert date]
⏰ Time: [Insert time]
📍 Venue: [Insert venue]

🔥 Highlights:
- Fun activities for everyone.
- Guest speakers from different fields.
- Free food and drinks for all.

🎟️ Admission: [Free/Ticket info here]
📢 You won't want to miss this event!

📲 Follow us on [Insert social media link] for updates.`,
    photos: [],
  },
];

const HomeScreen = () => {
  const [posts, setPosts] = useState(samplePost);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Screen style={styles.container}>
      <PostBox onPostSubmit={addPost} />
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Post user={item.user} caption={item.caption} photos={item.photos} />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.screenWhite,
  },
});

export default HomeScreen;