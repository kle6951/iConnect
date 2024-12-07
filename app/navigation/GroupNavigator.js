import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityScreen from "../screens/ActivityScreen";
import ListingItems from "../screens/ListingItems";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListRoomate from "../screens/ListRoomate";
import ListEditScreen from "../screens/ListEditScreen";
import RoomateEditScreen from "../screens/RoomateEditScreen";
import GroupScreen from "../screens/GroupScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const GroupNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Activity">
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerTitle: "iConnect",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen
        name="GroupListings"
        component={GroupScreen}
        options={{ headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="ListingItems"
        component={ListingItems}
        options={{ headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="ListingRoomate"
        component={ListRoomate}
        options={{ headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="ListingEdit"
        component={ListEditScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="RoomateEdit"
        component={RoomateEditScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GroupNavigator;
