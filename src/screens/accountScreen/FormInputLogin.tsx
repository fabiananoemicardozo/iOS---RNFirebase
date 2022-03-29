import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../../utils/Dimensions'

const FormInputLogin = ({labelValue, placeholderText, ...rest}: any ) => {
  return (
    <View>
      
      <TextInput
        value={labelValue}
        style={s.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#666'
        {...rest}   
      />
    </View>
  )
}

export default FormInputLogin

const s = StyleSheet.create({
    input: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 2,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1
    }
})