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
  resizeMode: 'cover',
  position: 'absolute',
},

overlayImage:{
  position: 'absolute',
  top: 200,
  left:10,
  width:'10%',
  height:'10%',
  resizeMode: 'contain'
},

});
