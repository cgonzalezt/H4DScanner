import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
  
    <Image source={require('./../assets/real_map_dos.jpg')} style={styles.backgroundimage} />

    <TouchableOpacity onPress={() => { console.log('Pin 1 pressed'); }}> 
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { console.log('Pin 2 pressed'); }}> 
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage2} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { console.log('Pin 3 pressed'); }}> 
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage3} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { console.log('Pin 4 pressed'); }}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage4} />
    </TouchableOpacity>

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
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage2:{
    position: 'relative',
    top: 300,
    left:70,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage3:{
    position: 'relative',
    top: 200,
    left:220,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage4:{
    position: 'relative',
    top: 3,
    left:90,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },

});
