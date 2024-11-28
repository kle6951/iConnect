import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItems/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import ListItemSeperator from "../components/ListItems/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
];
function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Josh Benjamin"
          description="josh123@mtroyal.ca"
          image={require("../assets/images/studentProfile.jpeg")}
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
                  ComponentName={item.icon.ComponentName}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("pressed")}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.primary} />}
        onPress={() => console.log("pressed")}
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
