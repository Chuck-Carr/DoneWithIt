import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require("../assets/background.jpg")}>
      <Image style={styles.logo} source={require("../assets/logo-red.jpg")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
  },
});
