import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

// Main App component
export default function App() {
  return (
    <>
    <OfflineNotice/>
      <NavigationContainer theme={NavigationTheme}>
        {/* <AppNavigator /> */}
        <AuthNavigator/>
      </NavigationContainer>
    </>
  );
}
