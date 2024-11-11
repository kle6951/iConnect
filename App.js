import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
// import NavigationTheme from "./navigation/NavigationTheme";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
//import LoginScreen from './screens/LoginScreen';
//import RegisterScreen from './screens/RegisterScreen';
// import ListingDetailScreen from "./screens/ListingDetailScreen";
// import ImageInput from "./components/ImageInput";
import { useState } from "react";
import Screen from "./app/components/Screen";
import Picker from "./app/components/Picker";
import AppTextInput from "./app/components/AppText/AppTextInput";
import ListEditScreen from "./app/screens/ListEditScreen";

// Main App component
export default function App() {
  // const [imageUris, setImageUris] = useState([]);
  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };
  return (
    // <NavigationContainer theme={NavigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
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
    // <Screen>
    //   <Picker icon="apps" placeholder="Category"/>
    //   <AppTextInput icon="email" placeholder="Email"/>
    // </Screen>
    <ListEditScreen />
  );
}
