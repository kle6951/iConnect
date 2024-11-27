import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

// Main App component
export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
      {/* <AuthNavigator/> */}
    </NavigationContainer>
  );
}
