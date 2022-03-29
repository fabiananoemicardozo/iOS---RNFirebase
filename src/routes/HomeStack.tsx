import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Nav } from '../types/type'
import HomeScreen from '../screens/homeScreen/HomeScreen'
import TopReviewScreen from '../screens/topReviewScreen/TopReviewScreen'


const Stack = createNativeStackNavigator<Nav>()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
         name='Home'
         component={HomeScreen}
         options={{title:"HOME"}}
      />
      <Stack.Screen 
         name='TopReview'
         component={TopReviewScreen}
         options={{title:"HOME"}}
      />
    </Stack.Navigator>
  )
}
export default HomeStack

