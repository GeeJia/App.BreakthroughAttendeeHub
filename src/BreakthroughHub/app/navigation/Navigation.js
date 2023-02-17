import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './Views/RegistrationForm';
import LogIn from './Views/LogIn';
import MainContainer  from './MainContainer';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn'>
                <Stack.Screen name="SignIn" component={LogIn} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="MainContainer" component={MainContainer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;