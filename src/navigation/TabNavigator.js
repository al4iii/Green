import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#000",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
  headerShown: false,
  tabBarActiveTintColor :'red', 
  tabBarInactiveTintColor: 'white',
  tabBarActiveBackgroundColor: "black",
  tabBarInactiveBackgroundColor: 'gray'

};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}} />
      <Tab.Screen name="Card" component={ContactStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Coupon" component={MainStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Contact" component={ContactStackNavigator} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator