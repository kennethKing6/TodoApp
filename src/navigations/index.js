import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Main} from './Main';


export default function Index() {
    return (
       <NavigationContainer>
            <Main/>
       </NavigationContainer>
    )
}
