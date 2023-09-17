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
            {"Total number of points:  " + getpointscounter()}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.mcdonalds.com/us/en-us.html')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 15% off your next McDonalds order: 100pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.pfchangs.com/')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 10% off your next P.F. Changs order: 125pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.redlobster.com/')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 25% off your next Red Lobster order: 175pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.chipotle.com/')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 20% off your next Chipotle order: 150pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.dominos.com/en/')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 25% off your next Domino's order: 100pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.subway.com/en-us?utm_source=bing&utm_medium=cpc&utm_term=subway_exact&utm_content=brand&utm_campaign=&cid=0:0:00:0:nat-us:0&segment_code=0&&msclkid=d1f3026dfde912be45ec676b3fdff65d&gclid=d1f3026dfde912be45ec676b3fdff65d&gclsrc=3p.ds')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 10% off your next Subway order: 50pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.starbucks.com/')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 30% off your next Starbucks order: 300pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.dunkindonuts.com/en')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 20% off your next Dunkin Donuts order: 150pts
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.panerabread.com/en-us/home.html')} style={styles2.ads}>
            <Text style={styles2.baseText}>
             Get 25% off your next Panera Bread order: 250pts
            </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05C597',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontFamily: 'Arial',
        fontSize: 16,
        flexWrap: 'wrap',
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#01FD70',
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
        width: 375,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'black',
    }

})