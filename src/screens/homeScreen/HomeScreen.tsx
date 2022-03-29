
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import FormButtonLogin from '../accountScreen/FormButtonLogin'
import { AuthContext } from '../../routes/AuthProvider'
import { NavigationContainer } from '@react-navigation/native'
import { userInfo } from 'os'
import Loading from '../accountScreen/Loading'



const HomeScreen = ({Navigation}: any) => {

  const [dataPlaces, setDataPlaces] = useState<FirebaseFirestoreTypes.DocumentData[]>([])

  useEffect(() =>{
    //lista
    const suscriber = firestore().collection('Inventory').onSnapshot(querySnapshot => {  
    const places: React.SetStateAction<FirebaseFirestoreTypes.DocumentData[]> = []
     
    //lista
    querySnapshot.forEach(documentSnapchot => {
      places.push({
        ...documentSnapchot.data(),
        key: documentSnapchot.id
        })
      })
      setDataPlaces(places)
    })

    return () => suscriber()
  }, [])

  //login
  const {user, logout}: any = useContext(AuthContext)

  return (
    <View style={s.container}>
      <FlatList
        data= {dataPlaces}
        renderItem = {({item}) => {
          return(
            <View style={s.list}>
              <Text style={s.places}>{item.name} </Text>
            </View>
          )
        }
      }     
      />
   
       {/* <FormButtonLogin buttonTitle='Log Out' onPress={Loading} /> */}
    </View>
  )
}

export default HomeScreen

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    margin: 0,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderColor: "#D7D7D7"
  },
  places: {
    fontFamily: 'georgia',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 21,
  }
})


