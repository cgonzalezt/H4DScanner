import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';

export default function ReturnMap() {
  return (
    <SafeAreaView style = {styles.container}>
      {/* Guide message */}
      <Text> 
        Click on a drop-off location! 
      </Text>
      
      {/* Map Image */}
      <Image
        source= {{
          width : 400,
          height : 550,
          uri: 'https://softauthor.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-3.56.27-PM.png'
        }}
      />

      <Button 
        color = "blue"
        title = "Click Me" 
        onPress = {()=> console.log("button tapped!") }
      />


        {/* // title="Click Me" onPress = {() => console.log("Button tapped")} */}
       
      {/* Pins */}
      {/* <TouchableHighlight onPress={() => console.log("Image tapped!")}> */}
      {/* </TouchableHighlight> */}


    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});