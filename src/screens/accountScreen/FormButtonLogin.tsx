
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../../utils/Dimensions'

const FormButtonLogin = ({buttonTitle, ...rest}: any) => {
  return (
    <View>
      <TouchableOpacity style={s.container} {...rest} >
        <Text style={s.buttonText} >{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormButtonLogin

const s = StyleSheet.create({
    container: {
      marginTop: 10,
      width: windowWidth / 2,
      height: windowHeight / 15,
      backgroundColor: '#3c1b51',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8      
    },
    buttonText: {
        fontSize: 15,
        color: '#ffffff'
    },
})