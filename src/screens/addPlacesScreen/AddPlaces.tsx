import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'


const AddPlaces = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [rating, setRating] = useState()

    const [dataPlaces, setDataPlaces] = useState<FirebaseFirestoreTypes.DocumentData[]>([])

    useEffect(() =>{
      const suscriber = firestore().collection('Inventory').onSnapshot(querySnapshot => {  
        const places: React.SetStateAction<FirebaseFirestoreTypes.DocumentData[]> = []
        
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


  return (
    <View>
        <FlatList
        data= {dataPlaces}
        renderItem = {({item}) => {
          return(
            <View>
              <TextInput
                placeholder='enter the name of the place'
                value={name}
                onChangeText = {text => item.key} 
                />
            </View>
          )
        }
      }     
      />


      <Text>Add Place</Text>

      
    
    </View>
  )
}

export default AddPlaces