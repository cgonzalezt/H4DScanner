import React, { Component } from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const titleText = "WESAVER";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
            <Text style= {globalStyles.titleText}>
                {titleText}
            </Text>
            </Text>
            <Button 
                onPress={() => navigation.navigate('Cam', {name: 'Cam'})}
                title = "Go to Camera"
                color = "black"
                fontSize = '40'
            />
            <Button
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                title = "Go to points and discounts"
                color = "black"
                fontSize = '40'
            />

            <Button
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                title = "Dont Know where to return?"
                color = "black"
                fontSize = '40'
            />

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
        fontSize: 80,
        fontWeight: 'bold',
    },
    buttonContainer: {
        margin: 20,
    },

})

export default Home;