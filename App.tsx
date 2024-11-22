import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
// Only import react-native-gesture-handler on native platforms

import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator sceneContainerStyle={{backgroundColor: 'lightblue', barst}} 
        >
        <Tabs.Screen name='Home' component={HomeScreen} options={
            {
              tabBarIcon: () => (<Ionicons name='home' size={35} color={'purple'} />),
              tabBarActiveTintColor: 'lightblue',
      
            }}
        />   
        <Tabs.Screen name='Details' component={DetailsScreen} options= {
            {
              tabBarIcon: () => (<Ionicons name='clipboard' size={35} color={'purple'} />),
              tabBarActiveTintColor: 'lightblue',
              tabBarLabel:"Details Screen",
            }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;