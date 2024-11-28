import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import Constant from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
        <Feather
          name={"wifi-off"}
          color={colors.white}
          size={20}
          style={styles.icon}
        />
      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.danger,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constant.statusBarHeight,
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
  icon: {
    marginLeft: 5,
  },
});
export default OfflineNotice;
