import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories.js";
import Post from "../components/home/Post.js";
import { POSTS } from "../data/posts";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const Homescreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
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

export default Homescreen;
