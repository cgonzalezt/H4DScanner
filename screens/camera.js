import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { incrementboxCounter,decreaseboxCounter,getboxcounter, incrementpointscounter,} from '../assets/global_counter';

const Camera =({navigation, route}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    incrementboxCounter();
    incrementpointscounter();
    setScanned(true);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/please_god.jpeg')} style={styles.backgroundimage} />
      <View style={styles.contentContainer}>
       <Text style={styles.boxCounterText}>{'Box(es): ' + getboxcounter() }</Text>
      <View style={styles.barcodebox}>
        {/* <Text>You have '$getboxcounter()' boxes left</Text> */}
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      {scanned &&<TouchableOpacity onPress={() => navigation.navigate('points2', {name: 'points2'})}
                style={styles.p2button}>
                <Text>Scanned! Continue</Text>
            </TouchableOpacity>
    }
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    borderColorb:'black',
    flex: 1,
  },
  boxCounterText:{
    fontSize:20,
    marginTop: 20,
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    fontWeight: 'bold',
    backgroundColor: '#945532',
    textShadowRadius: 3,
        textShadowOffset: {
            width: 2,
            height: 2,
        }
  },
  contentContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontWeight: 'bold',
    borderColorb:'black',
    
  },
  backgroundimage:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    resizeMode: 'cover',},
    
    
  maintext: {
    fontSize: 20,
    margin: 20,
  
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  p2button: {
    marginTop: 20,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
  }
});
export default Camera