import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
    <Image source={require('./../assets/map.webp')} style={styles.backgroundimage} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    </View>
  );
}

const styles = StyleSheet.create({

imagecontainer: {

width: '100%',
height: '100%',

},
backgroundimage:{
  width:'100%',
  height:'100%',
  resizeMode: 'cover',
  position: 'absolute',
},

overlayImage:{
  position: 'relative',
  top: 200,
  left:10,
  width:'10%',
  height:'10%',
  resizeMode: 'contain'
},


});
