import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import ListingItems from "./screens/ListingItems";
//import LoginScreen from './screens/LoginScreen';
//import RegisterScreen from './screens/RegisterScreen';
// import ListingDetailScreen from "./screens/ListingDetailScreen";
// import ImageInput from "./components/ImageInput";
import Screen from "./components/Screen";
import { useState } from "react";
import ImageInputList from "./components/ImageInputList";
import UserInfoScreen from "./screens/userInfoScreen";

// Main App component
export default function App() {
  const [imageUris, setImageUris] = useState([]);
  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <ListingDetailScreen />
    // <ListingItems/>
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
    // <UserInfoScreen />
  );
}
