import { Platform } from "react-native";
import colors from "../../app/config/colors";

export default {
  colors,
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
