import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Home = ({navigation}) => {
    return (
        <View style={globalStyles.container}>
            <Text style= {globalStyles.titleText}>
                Welcome!
            </Text>
            <Button 
                onPress={() => navigation.navigate('Cam', {name: 'Cam'})}
                title = "Go to Camera"
                color = "#841584"
            />
            <Button
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                title = "Go to points"
                color = "grey"
            />

            <Button
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                title = "Dont Know where to return?"
                color = "grey"
            />

        </View>
    );
}

export default Home;