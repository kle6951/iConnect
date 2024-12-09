import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MyListingScreen from "../screens/MyListingsScreen";
import MyRoomateListings from "../screens/MyRoomateListings";
import ListDetailScreen from "../screens/ListingDetailScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerTitle: "iConnect",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <Stack.Screen
        name="MyListing"
        component={MyListingScreen}
        options={{ headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="MyRoomateListing"
        component={MyRoomateListings}
        options={{ headerTitle: "", headerBackTitle: "" }}
      />
      <Stack.Screen
        name="MyListDetailScreen"
        component={ListDetailScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
