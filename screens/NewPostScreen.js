import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  );
};

const statusBarHeight = Constants.statusBarHeight;
const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
      paddingTop: statusBarHeight,
    },
  });

export default NewPostScreen;
