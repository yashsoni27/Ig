import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icons}
            source={require("../../assets/add.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>12</Text>
          </View>
          <Image
            style={styles.icons}
            source={require("../../assets/messenger.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,    
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  icons: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: 'white',
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    tintColor: "white",
  },

  unreadBadge: {
    backgroundColor: 'red',
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,    
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: 600,
  }
});

export default Header;
