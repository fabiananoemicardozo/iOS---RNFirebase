import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import FormInputLogin from './FormInputLogin'
import FormButtonLogin from './FormButtonLogin'
import { AuthContext } from '../../routes/AuthProvider'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {register}: any = useContext(AuthContext)

  return (
    <View style={s.container}>
      <Text style={s.text}>create an accout</Text>
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
        buttonTitle='Signup'
        onPress={() => register (email, password)}
      />
    </View>
  )
}

export default Signup

const s = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
    },
})