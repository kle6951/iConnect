import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authUser from "./app/auth/storage";
import * as SplashScreen from "expo-splash-screen";

// Main App component
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // Keep the splash screen visible until the app is ready
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Prevent auto-hide of splash screen
    const restoreUser = async () => {
      const storedUser = await authUser.getUser();
      if (!storedUser) return null;
      setUser(storedUser);
    };

    restoreUser().finally(() => {
      setIsReady(true); // Once the user is restored, hide the splash screen
      SplashScreen.hideAsync(); // Hide splash screen
    });
  }, []);

  if (!isReady) {
    return null; // Keep the splash screen visible while loading
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
