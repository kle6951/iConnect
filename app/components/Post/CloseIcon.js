import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon";
import colors from "../../config/colors";

function CloseIcon({
  onPress,
  size = 50,
  backgroundColor = colors.screenWhite,
  iconColor = "black",
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name="close"
        size={size}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
      />
    </TouchableOpacity>
  );
}

export default CloseIcon;
