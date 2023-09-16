import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Button from '../assets/Button';
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
            title= "Go to Camera"
            onPress={() => navigation.navigate('Cam', {name: 'Cam'})
            }
            />

        </View>
    );
}

export default Home;