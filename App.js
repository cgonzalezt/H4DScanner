import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/home';
import points1 from './screens/points1';
import points2 from './screens/points2';
import Cam from './screens/camera';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 


const App = () => {
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
    // for you luis
}; 

export default App;
 
