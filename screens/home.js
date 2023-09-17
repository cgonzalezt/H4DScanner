import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const FlexDirectionBasics = () => {
    const [flexDirection, setflexDirection] = useState('column');

    return (
        <PreviewLayout>
            <View style={[styles.box, {backgroundColor: 'lawngreen'}]}/>
        </PreviewLayout>

    );
};

const titleText = useState("WESAVER");

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
            />
            <Button
                onPress={() => navigation.navigate('points1', {name: 'points1'})}
                title = "Go to points and discounts"
                color = "black"
            />

            <Button
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                title = "Dont Know where to return?"
                color = "black"
            />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'limegreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonContainer: {
        margin: 20,
    },
    box: {
        width: 250,
        height: 50,
    },
    row:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default Home;