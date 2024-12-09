import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import GroupButton from "./GroupButton";
import GroupNavigator from "./GroupNavigator";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigator";

// creates a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 80, // Adjust the height of the tab bar to fit the button
        paddingBottom: 10, // Make space for the button at the bottom of the tab bar
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerTitle: "iConnect",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
      }}
    />
    <Tab.Screen
      name="Group"
      component={GroupNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <GroupButton onPress={() => navigation.navigate("Group")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="upcircle" color={color} size={size} />
        ),
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
