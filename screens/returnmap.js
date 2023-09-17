import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, Linking, StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <View style={(styles.imagecontainer)}>
  
    <Image source={require('./../assets/real_map_dos.jpg')} style={styles.backgroundimage} />

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { Alert.alert("Open location in Google Maps?", 
                     "", 
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                              // Create a deep link URL for the location to open in Google Maps
                              const googleMapsUrl = 'https://maps.app.goo.gl/hg7NwtMNmSoM6xet9';
                              
                              // Use Linking to open the Google Maps app or a browser if the app is not installed
                              Linking.canOpenURL(googleMapsUrl).then(supported => {
                                  if (supported) {
                                      Linking.openURL(googleMapsUrl);
                                  } else {
                                      console.log("Google Maps is not installed.");
                                      // Handle the case where Google Maps is not installed, e.g., open in a browser
                                      // Linking.openURL('https://www.google.com/maps?q=Your+Location');
                                  }
                              });
                          }
                        },

                        {text: "No", onPress: () => console.log("No")},
                      ] 
          )}}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage} />
    </TouchableOpacity>

    <TouchableOpacity 
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { Alert.alert("Open location in Google Maps?", 
                     "", 
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                              // Create a deep link URL for the location to open in Google Maps
                              const googleMapsUrl = 'https://maps.app.goo.gl/u1mDka9K3jmWYbTF6';
                              
                              // Use Linking to open the Google Maps app or a browser if the app is not installed
                              Linking.canOpenURL(googleMapsUrl).then(supported => {
                                  if (supported) {
                                      Linking.openURL(googleMapsUrl);
                                  } else {
                                      console.log("Google Maps is not installed.");
                                      // Handle the case where Google Maps is not installed, e.g., open in a browser
                                      // Linking.openURL('https://www.google.com/maps?q=Your+Location');
                                  }
                              });
                          }
                        },

                        {text: "No", onPress: () => console.log("No")},
                      ] 
          )}}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage2} />
    </TouchableOpacity>

    <TouchableOpacity
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { Alert.alert("Open location in Google Maps?", 
                     "", 
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                              // Create a deep link URL for the location to open in Google Maps
                              const googleMapsUrl = 'https://maps.app.goo.gl/xFdFk14ncTnvodBD9';
                              
                              // Use Linking to open the Google Maps app or a browser if the app is not installed
                              Linking.canOpenURL(googleMapsUrl).then(supported => {
                                  if (supported) {
                                      Linking.openURL(googleMapsUrl);
                                  } else {
                                      console.log("Google Maps is not installed.");
                                      // Handle the case where Google Maps is not installed, e.g., open in a browser
                                      // Linking.openURL('https://www.google.com/maps?q=Your+Location');
                                  }
                              });
                          }
                        },

                        {text: "No", onPress: () => console.log("No")},
                      ] 
          )}}>
    <Image source={require('./../assets/pin.png')} style={styles.overlayImage3} />
    </TouchableOpacity>

    <TouchableOpacity  
    style={[styles.overlaytouch,{top:120,left:120}]}
    onPress={() => { Alert.alert("Open location in Google Maps?", 
                     "", 
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                              // Create a deep link URL for the location to open in Google Maps
                              const googleMapsUrl = 'https://maps.app.goo.gl/aP4Vj7m5AdwCrTkRA';
                              
                              // Use Linking to open the Google Maps app or a browser if the app is not installed
                              Linking.canOpenURL(googleMapsUrl).then(supported => {
                                  if (supported) {
                                      Linking.openURL(googleMapsUrl);
                                  } else {
                                      console.log("Google Maps is not installed.");
                                      // Handle the case where Google Maps is not installed, e.g., open in a browser
                                      // Linking.openURL('https://www.google.com/maps?q=Your+Location');
                                  }
                              });
                          }
                        },

                        {text: "No", onPress: () => console.log("No")},
                      ] 
          )}}>
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
