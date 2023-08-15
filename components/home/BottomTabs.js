import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/home-filled.png"),
    inactive: require("../../assets/home.png"),
  },
  {
    name: "Search",
    active: require("../../assets/search-filled.png"),
    inactive: require("../../assets/search.png"),
  },
  {
    name: "Post",
    active: require("../../assets/add-filled.png"),
    inactive: require("../../assets/add.png"),
  },
  {
    name: "Like",
    active: require("../../assets/like-filled.png"),
    inactive: require("../../assets/like.png"),
  },
  {
    name: "Profile",
    active: "https://source.unsplash.com/50x50/?portrait?1",
    inactive: "https://source.unsplash.com/50x50/?portrait?1",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      {icon.name == "Profile" && (
        <Image
          source={{ uri: icon.inactive }}
          style={[styles.icon, styles.profilePic(), icon.name == "Profile" ? styles.profilePic(activeTab) : null]}
        />
      )}
      {icon.name != "Profile" && (
        <Image
          source={activeTab == icon.name ? icon.active : icon.inactive}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // position: 'absolute',
    width: "100%",
    // bottom: 0,
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: "orange",
    borderWidth: 1,
    borderWidth: activeTab == "Profile" ? 2 : 0,
  }),
});

export default BottomTabs;
