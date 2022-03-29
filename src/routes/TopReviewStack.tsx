import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Nav } from '../types/type'
import TopReviewScreen from '../screens/topReviewScreen/TopReviewScreen'


const Stack = createNativeStackNavigator<Nav>()

const TopReviewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
         name='TopReview'
         component={TopReviewScreen}
         options={{title:"TOP REVIEW"}}
      />
    </Stack.Navigator>
  )
}
export default TopReviewStack