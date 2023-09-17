import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
  
    <Image source={require('./../assets/real_map_dos.jpg')} style={styles.backgroundimage} />

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { console.log('Pin 1 pressed'); }}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    </TouchableOpacity>

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { console.log('Pin 2 pressed'); }}> 
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage2} />
    </TouchableOpacity>

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { console.log('Pin 3 pressed'); }}> 
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage3} />
    </TouchableOpacity>

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { console.log('Pin 4 pressed'); }}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage4} />
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  imagecontainer: {
    flex: 1,
  },

  backgroundimage:{
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
overlaytouch:{
  position:'absolute',
  width:'25%',
  height:'25%',
  alignItems:'center',
  justifyContent:'center',

},

  overlayImage:{
    top: 320,
    left:120,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage2:{
    top: 140,
    left:2,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage3:{
    top: 280,
    left:.001,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },
  overlayImage4:{
    top: 3,
    left:90,
    width:'25%',
    height:'25%',
    resizeMode: 'contain'
  },

});
