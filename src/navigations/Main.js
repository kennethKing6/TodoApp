import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/Home';

const Stack = createStackNavigator();

export  function Main() {

    return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
    )
}
