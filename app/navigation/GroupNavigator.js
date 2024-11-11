// GroupNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MarketScreen from "../screens/MarketScreen";
import ListingItems from "../screens/ListingItems";
// import GroupScreen from "../screens/GroupScreen";

const Stack = createStackNavigator();

const GroupNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Market">
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="ListingItems" component={ListingItems} />
      {/* <Stack.Screen name="GroupScreen" component={GroupScreen} /> */}
    </Stack.Navigator>
  );
};

export default GroupNavigator;
