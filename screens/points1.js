import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const titleText = "REEDEM YOUR POINTS";

export default function Points1() {
  return (
    <View style={globalStyles.container}>
        <Text style= {globalStyles.titleText}>
            {titleText}
        </Text>
        <Text style= {globalStyles.paragraph}>
            {"Total number of points: num."}
        </Text>
    </View>
  );
}