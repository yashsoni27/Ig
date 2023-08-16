import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
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
