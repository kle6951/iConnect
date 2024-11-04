import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
// import GroupScreen from "../screens/GroupScreen";
import MarketScreen from "../screens/MarketScreen";
import AccountScreen from "../screens/AccountScreen";
import GroupButton from "./GroupButton";

// creates a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Group"
      component={MarketScreen}
      // linking the custom group button to the Group Screen
      options={({ navigation }) => ({
        tabBarButton: () => (
          <GroupButton onPress={() => navigation.navigate("Group")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="upcircle" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
