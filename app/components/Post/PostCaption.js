import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

const PostCaption = ({ caption }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Maximum number of lines to show when collapsed
  const MAX_LINES = 5;

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} activeOpacity={0.7}>
      <AppText
        style={styles.caption}
        numberOfLines={isExpanded ? undefined : MAX_LINES}
      >
        {caption}
      </AppText>
      {!isExpanded && caption.split(" ").length > 20 && (
        <AppText style={styles.readMore}>Read more</AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caption: {
    fontSize: 14,
    color: colors.darkGrey,
    marginBottom: 10,
  },
  readMore: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default PostCaption;
