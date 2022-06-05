import React, {useState, useCallback, ReactNode} from 'react';
import {ReactLogo} from './ReactLogo';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function WorkScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <ReactLogo width={200} height={200} />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <ReactLogo width={200} height={200} />
      <Button onPress={() => navigation.navigate('Work')} title="Go to work" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator detachInactiveScreens={true}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Work" component={WorkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
