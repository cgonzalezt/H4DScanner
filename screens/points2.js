import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Points2() {
  return (
    <View style={globalStyles.container}>
      <Text>p2</Text>
    </View>
  );
}

const styles2 = StyleSheet.create({
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
    ButtonContainer: {
        elevation: 8,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

})