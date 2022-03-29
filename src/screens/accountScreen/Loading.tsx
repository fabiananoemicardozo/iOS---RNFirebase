import React, { useRef, useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import {  } from '@react-native-firebase/firestore'

const Loading = () => {

  return(
    <View style={s.container}>
      <ActivityIndicator size='large' color='#6646ee'/>
    </View>
  )
}

export default Loading

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})