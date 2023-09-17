import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {getpointscounter,incrementpointscounter,decreasepointsCounter} from '../assets/global_counter';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const titleText = "REEDEM YOUR POINTS";

export default function Points1() {
  return (
    <View style={styles2.container}>

        <Text style= {styles2.titleText}>
            {titleText}
        </Text>

        <Text style= {styles2.header}>
            {"Total number of points:" + getpointscounter()}
        </Text>

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
        fontSize: 60,
        fontWeight: 'bold',
        color: 'darkgreen',
    },
    header: {
        fontSize: 30,
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

})