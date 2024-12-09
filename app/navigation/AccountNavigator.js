import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MyListingScreen from "../screens/MyListingsScreen";
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
    </Stack.Navigator>
  );
};

export default AccountNavigator;
