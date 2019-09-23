/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Users from './screens/Users';
import Add from './screens/Add'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Apply from './screens/Apply'
import CollegeFees from './screens/CollegeFees'
import Slider from './screens/Slider'
import Welcome from './screens/Welcome'
import Edit from './screens/Edit'
import Splash from './screens/Splash'


const AppNavigator = StackNavigator(
  {
    Splash: { screen: Splash
  },
   Slider : { screen: Slider
  },
  
    Jobs : { screen: Users}
  ,
    SignUp: { screen: SignUp
  },
    Welcome: { screen: Welcome
  },
     Login : { screen: Login },
    Apply : { screen: Apply },
    CollegeFees : {screen: CollegeFees}
}, { headerMode: 'none' })

export default class App extends Component {
  componentDidMount() {
    // SplashScreen.hide()
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
