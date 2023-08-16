import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/instaLogo.png")} style={{height:100, width:100}} />
      </View>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal: 15
    },
    logoContainer: {
        alignItems:'center',
        marginTop: 60,
        
    }
})

export default LoginScreen;
