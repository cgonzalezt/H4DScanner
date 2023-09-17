import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { getpointscounter } from '../assets/global_counter';

const titleText = "CONGRATULATIONS"
export default function Points2({navigation}) {
  return (
    <View style={styles2.container}>

        <Text style= {styles2.titleText}>
            {titleText}
        </Text>

        <Text style= {styles2.header}>
            {"You just gained " + 25 + " points!"}
        </Text>
        <TouchableOpacity
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                style={styles2.p1button}>
                <Text style = {styles2.baseText}>CHECK YOUR REWARDS!</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontFamily: 'Arial',
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'darkgreen',
        
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
    ButtonContainer: {
        elevation: 8,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    p1button: {
      marginTop: 20,
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'green',
  },

})