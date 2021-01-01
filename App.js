import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Component/Login';
import MainRoot from './src/Component/MainRoot';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistor, store} from './store';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MainRoot" component={MainRoot} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
