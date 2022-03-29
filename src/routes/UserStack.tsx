import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Nav } from '../types/type'
import { AuthContext } from './AuthProvider'


import HomeStack from './HomeStack'
import AuthStack from './AuthStack'
import Signup from '../screens/accountScreen/Signup'
import UserLoginScreen from '../screens/accountScreen/UserLoginScreen'

interface IProps {
   user: string
   setUser: string
 }
 
const Stack = createNativeStackNavigator<Nav>()

const UserStack = () => {

   const { user , setUser }: any = useContext(AuthContext)
   const [loading, setLoading] = useState(true)
   const [initializing, setInitializing] = useState(true)

   const onAuthStateChanged = (user: any) => {
      setUser(user)
      if (initializing) setInitializing(false)
      setLoading(false)
   }

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber
   }, [])

   if (loading) {
      return <UserLoginScreen  />
   }


   return (

      <Stack.Navigator>
      {user ? <HomeStack /> : <AuthStack />}
    </Stack.Navigator>

   )
}
export default UserStack

/*       <Stack.Navigator initialRouteName='UserLogin'>
         {user == null ? (
            <>
               <Stack.Screen
                  name="UserLogin"
                  component={UserLoginScreen}
                  options={{
                     title: 'Log In',
                     animationTypeForReplace: user ? 'pop' : 'push',
                  }}

               />
               <Stack.Screen name='Signup' component={Signup} />
               <Stack.Screen name='Loading' component={Loading} />
               
            </>
         ) : (
            <>
               <Stack.Screen name='Home' component={HomeScreen} />
               
            </>
         )}
      </Stack.Navigator> */
