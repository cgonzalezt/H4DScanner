import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/home';
import points1 from '../screens/points1';
import points2 from '../screens/points2'
import { createAppContainer } from "react-navigation";


const screens = {
    Home: {
        screen: Home
    },
    Points1: {
        screen: points1
    },
    Points2: {
        screen: points2
    },
}
const HomeStack = createStackNavigator(screens); 

export default createAppContainer(HomeStack);