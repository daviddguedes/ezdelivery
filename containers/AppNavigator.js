import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import MainScreen from '../screens/MainScreen';

const MainStackNav = createStackNavigator({
   Main: MainScreen
});

const AppNavigator = createSwitchNavigator({
   Main: MainStackNav
});

export default createAppContainer(AppNavigator);