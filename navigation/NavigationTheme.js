import { DefaultTheme } from "@react-navigation/native";
import colors from "../app/config/colors";

//Custom personal theme
export default {
    ...DefaultTheme, //Copy all sources from default theme
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary, //override default theme for primary color
        background: colors.screenWhite //override default theme for background color
    }
};