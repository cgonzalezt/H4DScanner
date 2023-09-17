import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
    <Image source={require('./../assets/map.webp')} style={styles.backgroundImage} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    </View>
  );
}

const styles = StyleSheet.create({

imagecontainer: {
position: 'relative',
width:300,
height:300,
},
backgroundImage:{
  width:'100%',
  height:'100%',
  resizemode: 'cover',
  position: 'absolute',
},

overlayImage:{
  position: 'absolute',
  top: 200,
  left:10,
  width:'10%',
  height:'10%',
  resizemode: 'cover'
},

});
