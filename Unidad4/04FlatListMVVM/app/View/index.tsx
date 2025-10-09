import { use } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Persona } from "../Model/Entities/PersonaModel";


const diego = new Persona(9, 'Diego', 'Ramirez');
const elena = new Persona(10, 'Elena', 'Torres');

const usuarios = [
  new Persona(1, 'Juan', 'Perez'),
  new Persona(2, 'Maria', 'Gomez'),
  new Persona(3, 'Carlos', 'Lopez'),
  new Persona(4, 'Ana', 'Martinez'),
  new Persona(5, 'Luis', 'Garcia'),
  new Persona(6, 'Sofia', 'Rodriguez'),
  new Persona(7, 'Miguel', 'Hernandez'),
  new Persona(8, 'Laura', 'Sanchez'),]


const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems : 'center'
  },  
  text: {
    fontSize: 18
  }
})

export default function Index() {
  return (
    <FlatList
    data = {usuarios}
    keyExtractor={(item) => item.getId.toString()}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <Text style = {styles.text} >{item.getNombre()} {item.getApellido()}</Text>
      </View>
    )}
    />
  )
}