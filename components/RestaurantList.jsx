import { useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function RestaurantList () {

  const [foodList, setFoodList] = useState()

  useEffect(() => {}, [])

  return(
   <View style ={styles.container} >
   <Text style={styles.title}>Restaurant List</Text>
   <ScrollView style={styles.list} ></ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginVertical: 8,
    color: 'yellow'
  },

  list:{
    width: '100%',
    borderColor: 'red',
    borderWidth: 2,
    },

  container:{
    flex: 1,
    backgroundColor: "pink",
    marginTop: 56,
    marginBottom: 25,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})