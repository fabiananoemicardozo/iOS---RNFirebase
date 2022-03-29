import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Nav } from '../types/type'
import FavoriteScreen from '../screens/favoriteScreen/FavoriteScreen'


const Stack = createNativeStackNavigator<Nav>()

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
         name='Favorite'
         component={FavoriteScreen}
         options={{title:"FAVORITES"}}
      />
    </Stack.Navigator>
  )
}
export default FavoritesStack