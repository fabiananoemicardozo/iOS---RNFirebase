import React, { useContext, useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth, { } from '@react-native-firebase/auth'

import { Nav } from '../types/type';


import HomeStack from './HomeStack';
import UserStack from './UserStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import TopReviewStack from './TopReviewStack';
import UserLoginScreen from '../screens/accountScreen/UserLoginScreen';
import { AuthContext } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';



//boton que permite la navegacion
const Tab = createBottomTabNavigator<Nav>()
const Stack = createNativeStackNavigator<Nav>()

export const TabNavigation = () => {

  return (
      <Tab.Navigator
      initialRouteName={"UserLogin"} 
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#3c1b51",
      //tabBarInactiveTintColor: "#f8c543"
    }}>

      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
    / >

      <Tab.Screen 
        name="UserLogin" 
        component={UserStack}
        options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
      />
 
      <Tab.Screen 
        name="Favorite" 
        component={FavoritesStack}
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
            ),
          }}
      />      
      <Tab.Screen 
        name="Search" 
        component={SearchStack }
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="comment-search-outline" color={color} size={size} />
            ),
          }}
      /> 
      
      <Tab.Screen 
        name="TopReview" 
        component={TopReviewStack }
        options={{
            tabBarLabel: 'TopReview',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-check" color={color} size={size} />
            ),
          }}
      /> 
    
      </Tab.Navigator>
  )
}


