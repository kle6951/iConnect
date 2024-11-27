import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground style={styles.container} source={require('../assets/Background.png')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Text style={styles.slogan}>We are connected!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" style={styles.button} onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" style={styles.button} onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  button: {
    marginVertical: 5, 
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  slogan: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    marginTop: -50,
    color: colors.primary,
  },
});

export default WelcomeScreen;
