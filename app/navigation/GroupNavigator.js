import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MarketScreen from "../screens/MarketScreen";
import ListingItems from "../screens/ListingItems";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListRoomate from "../screens/ListRoomate";
import ListEditScreen from "../screens/ListEditScreen";
import RoomateEditScreen from "../screens/RoomateEditScreen";

const Stack = createStackNavigator();

const GroupNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Market">
      <Stack.Screen
        name="Market"
        component={MarketScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingItems"
        component={ListingItems}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="ListingRoomate"
        component={ListRoomate}
        options={{ headerTitle: "" }}
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
