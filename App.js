import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/home';
import points1 from './screens/points1';
import points2 from './screens/points2';
import returnmap from './screens/returnmap';
import Cam from './screens/camera';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="HomeScreen"
            activeColor="red"
            inactiveColor="white"
            activeBackgroundColor="green"
            inactiveBackgroundColor="green"
            style={{ backgroundColor: 'green' }}
            tabBarOptions={{
              style:{
                backgroundColor: 'green'
              }
            }}>
                <Stack.Screen name = "Home" component={Home} />
                <Stack.Screen name = "Cam" component={Cam} options = {{title:'Camera Scanner',
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}/>
                <Stack.Screen name = "points1" component={points1} />
                <Stack.Screen name = "points2" component={points2} />
                <Stack.Screen name = "returnmap" component={returnmap} options = {{title:'Return Locations'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 
export default App;
 
