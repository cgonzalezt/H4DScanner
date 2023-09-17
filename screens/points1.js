import React from 'react';
import { StyleSheet, View, Text , SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Linking} from 'react-native';
import { globalStyles } from '../styles/global';
import {getpointscounter,incrementpointscounter,decreasepointsCounter} from '../assets/global_counter';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const titleText = "REEDEM YOUR POINTS";

export default function Points1() {
  return (
    <SafeAreaView style={styles2.container}>
        <ScrollView style={styles2.scrollview}>
        <Text style= {styles2.titleText}>
            {titleText}
        </Text>

        <Text style= {styles2.header}>
            {"Total number of points:" + getpointscounter()}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.mcdonalds.com/us/en-us.html')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 15% off your next McDonalds order: 100pts
            </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
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
    ads: {
        marginTop: 20,
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    }

})