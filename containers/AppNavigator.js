import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import MainScreen from '../screens/MainScreen';
import AuthScreen from "./../screens/AuthScreen";
import Login from './../screens/Login';
import Signup from './../screens/Signup';

const AuthStackNav = createStackNavigator({
   Auth: AuthScreen,
   Login: Login,
   Signup: Signup
});

const MainStackNav = createStackNavigator({
   Main: MainScreen
});

const AppNavigator = createSwitchNavigator({
   Home: MainStackNav,
   Auth: AuthStackNav,
}, {
      initialRouteName: 'Auth'
   });

export default createAppContainer(AppNavigator);