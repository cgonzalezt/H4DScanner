import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Cam from '../screens/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const FlexDirectionBasics = () => {
    const [flexDirection, setflexDirection] = useState('column');

    return (
        <PreviewLayout
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
            <View style={[styles.box, {backgroundColor: 'lawngreen'}]}/>
        </PreviewLayout>

    );
};

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
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
                title = "Go to points and discounts"
                color = "grey"
            />

            <Button
                onPress={() => navigation.navigate('returnmap', {name: 'returnmap'})}
                title = "Dont Know where to return?"
                color = "grey"
            />

        </View>
    );
};

const PreviewLayout = ({
    children,
    selectedValue,
    setSelectedValue,
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
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