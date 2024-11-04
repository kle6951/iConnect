import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigator";
//import LoginScreen from './screens/LoginScreen';
//import RegisterScreen from './screens/RegisterScreen';

// Main App component
export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <LoginScreen/>
    // <RegisterScreen/>
    // <MarketScreen/>
  );
}
