import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web'

export default function WelcomeScreen() {
  return (
    <View>
      <View 
      style={styles.background}
      >
        <Image source={require("../../app/assets/")}/>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        ImageBackground: require("../assets/backgroundimage.jpg"),
        flex: 1,
        justifyContent: "flex-end",

    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})