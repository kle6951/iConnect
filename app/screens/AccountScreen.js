import React, { useEffect } from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItems/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItems/ListItemSeperator";
import useAuth from "../auth/useAuth";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const menuItems = [
  {
    title: "Textbook Listings",
    icon: {
      name: "book",
      backgroundColor: colors.primary,
      IconComponentName: AntDesign,
    },
  },
  {
    title: "Accomodation Listings",
    icon: {
      name: "house",
      backgroundColor: colors.primary,
      IconComponentName: MaterialIcons,
    },
  },
];
function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  const navigateAccTab = (title) => {
    if (title === "Textbook Listings") {
      navigation.navigate("MyListing");
    } else if (title === "Accomodation Listings") {
      navigation.navigate("MyRoomateListing");
    }
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user?.full_name}
          description={user?.email}
          image={
            user?.avatar
              ? { uri: JSON.parse(user.avatar)[0]?.url }
              : require("../assets/images/userDefaultAvatar.png") // Fallback to default
          }
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeperator}
          keyExtractor={(item) => item.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  ComponentName={item.icon.IconComponentName}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigateAccTab(item.title)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.primary} />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
