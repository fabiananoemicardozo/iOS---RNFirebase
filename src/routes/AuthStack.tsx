
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'


import UserLoginScreen from '../screens/accountScreen/UserLoginScreen'
import Signup from '../screens/accountScreen/Signup'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='UserLogin'>
        <Stack.Screen
        name='UserLogin'
        component={UserLoginScreen}
        options={{ header: () => null }}       
        />
        <Stack.Screen
        name='Signup'
        component={Signup}       
        />
    </Stack.Navigator>

  )
}

export default AuthStack