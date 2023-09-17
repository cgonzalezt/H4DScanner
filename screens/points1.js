import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { incrementCounter,decreaseCounter,getcounter,} from '../assets/global_counter';
const titleText = "REEDEM YOUR POINTS";
const counter = getcounter();

export default function Points1() {
  return (
    <View style={styles2.container}>

        <Text style= {styles2.titleText}>
            {titleText}
        </Text>

        <Text style= {styles2.header}>
            {"Total number of points:" + counter}
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