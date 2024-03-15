import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <AntDesign name="menu-fold" size={30} color="white" />
      </View>
      <View>
        <Image
          source={require('../assets/app_images/avatar.png')}
          style={{width: 30, height: 30, borderRadius: 7}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
