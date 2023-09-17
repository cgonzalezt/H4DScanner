import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const titleText = "WESAVER";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
            <Text style= {styles.titleText}>
                {titleText}
            </Text>
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Cam', {name: 'Cam'})}
                style = {styles.cambutton}>
                <Text>Scan Container</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                style={styles.p1button}>
                <Text>Check/Redeem your points!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                style={styles.mapbutton}>
                <Text>Dropoff locator</Text>
            </TouchableOpacity>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumaquamarine',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontFamily: 'Arial',
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    cambutton: {
        marginTop: 20,
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    }
    },

})

export default Home;