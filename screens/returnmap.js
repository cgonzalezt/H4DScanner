import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <view style={(styles.imagecontainer)}>

    <image source={require('./../assets/map.webp')} style={styles.backgroundimage} />
    <image source={require('./../assets/pin.png')} style={styles.backgroundimage} />
    </view>
  );
}

const styles = StyleSheet.create({

imagecontainer: {

position: 'relative',
width:300,
height:300,
},
backgroundimage:{

  width:'100%',
  height:'100%',
  resizemode: 'cover'
},

overlayImage:{
  position: 'absolute',
  top: 0,
  left:0,
  width:'100%',
  height:'100%',
  resizemode: 'cover'
},

});
