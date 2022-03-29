import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, Image } from 'react-native'
import auth, { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth'
import {  } from '@react-native-firebase/firestore'
import FormInputLogin from './FormInputLogin'
import FormButtonLogin from './FormButtonLogin'
import { AuthContext } from '../../routes/AuthProvider'
import { NavigationRouteContext } from '@react-navigation/native'


interface UserData {
  email: string;
  password: string;
}

const UserLoginScreen = ({navigation}: any) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login}: any= useContext(AuthContext)


  const [values, setValues] = useState({
    email: "",
    password: ""
} as UserData);






const handleChange = (event: any) => {
  event.persist();
  setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
}));
}
const handleSubmit = (event: any) => {
  event.preventDefault();


  

  firebase
  .auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .catch(error => {
  console.log(error.message);
  
 });
}



  return(
    <View style={s.container}>
      <Image source={require('../../image/logo.png')} style={s.image} />
      <Text style={s.text}>Log In</Text>
      <FormInputLogin
        value={email}
        placeholderText='Email'
        onChangeText={(userEmail: React.SetStateAction<string>) => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}  
      />
      <FormInputLogin
        value={password}
        placeholderText='Password'
        onChangeText={(userPassword: React.SetStateAction<string>) => setPassword(userPassword)}
        secureTextEntry={true}      
      />
     
      <FormButtonLogin
        buttonTitle='Login'
        onPress={() => {login}} 
      />
 
      
      <TouchableOpacity style={s.navButton} onPress={()=> navigation.navigate('Signup') }>
        <Text style={s.navButtonText} >New user? Join here</Text>
      </TouchableOpacity>     
    </View>
  )
}

export default UserLoginScreen



const s= StyleSheet.create({
  container: {
    backgroundColor:  '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#3c1b51',
  },
  image: {
    width: 150,
    height: 150,
  },
})
