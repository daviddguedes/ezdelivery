import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthScreen from "./../screens/AuthScreen";
import Login from './../screens/Login';
import Signup from './../screens/Signup';

const AuthStackNav = createStackNavigator({
   Auth: AuthScreen,
   Login: Login,
   Signup: Signup
});

const AuthNavigator = createSwitchNavigator({
   Auth: AuthStackNav
});

export default createAppContainer(AuthNavigator);