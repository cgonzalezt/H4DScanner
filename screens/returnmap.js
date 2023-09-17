import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
    <Image source={require('./../assets/real_map_dos.jpg')} style={styles.backgroundimage} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage2} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage3} />
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage4} />
    </View>
  );
}

const styles = StyleSheet.create({

  imagecontainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'relative',
  },

  backgroundimage:{
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  overlayImage:{
    position: 'relative',
    top: 120,
    left:120,
    width:'7%',
    height:'7%',
    resizeMode: 'contain'
  },
  overlayImage2:{
    position: 'relative',
    top: 300,
    left:70,
    width:'7%',
    height:'7%',
    resizeMode: 'contain'
  },
  overlayImage3:{
    position: 'relative',
    top: 500,
    left:220,
    width:'7%',
    height:'7%',
    resizeMode: 'contain'
  },
  overlayImage4:{
    position: 'relative',
    top: 230,
    left:290,
    width:'7%',
    height:'7%',
    resizeMode: 'contain'
  },

});
