import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const titleText = "WESAVER";

const image = {uri: 'https://i.pinimg.com/originals/ad/fa/06/adfa06a2e4c804ce1ba06826c76c949e.pnghttps://wallpapercave.com/wp/wp5349389.jpg'};

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Image source={require('./../assets/plant_flic.jpeg')} style={styles.backgroundimage} />
            <Text style={styles.baseText}>
            <Text style= {styles.titleText}>
                {titleText}
            </Text>
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Cam', {name: 'Cam'})}
                style = {styles.cambutton}>
                <Text style = {styles.baseText}>Scan Container</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                style={styles.p1button}>
                <Text style = {styles.baseText}>Your Points</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                style={styles.mapbutton}>
                <Text style = {styles.baseText}>Dropoff Locations</Text>
            </TouchableOpacity>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundimage:{
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    baseText: {
        fontFamily: 'Arial',
        color: 'white',
        fontSize: 25,
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FF0017',
    },
    cambutton: {
        marginTop: 20,
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    },
    p1button: {
        marginTop: 20,
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    },
    mapbutton: {
        marginTop: 20,
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
    },
)

export default Home;