import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

// Define the tab navigator
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const ForumScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Forum Screen</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account Screen</Text>
    </View>
  );
};

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            const iconSize = 45;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Forum") {
              iconName = "forum";
            } else if (route.name === "Account") {
              iconName = "account";
            }
            return <Icon name={iconName} color={color} size={iconSize} />;
          },
          tabBarActiveTintColor: "#25a9e0", // Active icon color
          tabBarInactiveTintColor: "white", // Inactive icon color
          tabBarStyle: {
            height: 90,
            paddingBottom: 5,
            backgroundColor: "#8bc53e",
            borderTopWidth: 0.5,
            borderTopColor: "#ddd",
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Forum"
          component={ForumScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
