import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>

      <Image
        source= {{
          width : 400,
          height : 550,
          uri: 'https://softauthor.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-3.56.27-PM.png'
        }}
      />
    
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