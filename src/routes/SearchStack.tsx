import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Nav } from '../types/type'
import SearchScreen from '../screens/searchScreen/SearchScreen'


const Stack = createNativeStackNavigator<Nav>()

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
         name='Search'
         component={SearchScreen}
         options={{title:"SEARCH"}}
      />
    </Stack.Navigator>
  )
}
export default SearchStack