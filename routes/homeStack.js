import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/home';
import points1 from '../screens/points1';
import points2 from '../screens/points2';
import Cam from '../screens/camera';
import { createNavigationContainer } from "@react-navigation/native-stack";

const HomeStack = createStackNavigator(); 


const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name = "Home"
                component={Home}
                />
                <Stack.Screen name = "Cam" component={Cam} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default createAppContainer(HomeStack);