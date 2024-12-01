import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useState, useEffect } from "react";
import AuthContext from "./app/auth/context";
import authUser from "./app/auth/storage";

// Main App component
export default function App() {
  const [user, setUser] = useState();
  const restoreUser = async () => {
    const storedUser = await authUser.getUser();
    if (!storedUser) return null;
    setUser(storedUser);
  };
  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
