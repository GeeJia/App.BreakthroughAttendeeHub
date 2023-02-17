import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Views
import Home from './Views/Home'
import Dashboard from './Views/DashBoard';
import Account from './Views/Account';

const Tab = createMaterialBottomTabNavigator();

const MainContainer = props =>{
    return(
             <Tab.Navigator
                initialRouteName="Home"
                activeColor="#75AD85"
                barStyle={{ backgroundColor: '#F6F6F6' }}
                >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} backgroundColor='#F6F6F6' />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={26} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                    ),
                    }}
                />
                </Tab.Navigator>              
    );
}
export default MainContainer;