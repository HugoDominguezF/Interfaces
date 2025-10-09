import { use } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useState } from "react";


const [usuarios, setUsuarios] = useState ([
  {id: '1', nombre: 'Juan', apellido: 'Perez'},
  {id: '2', nombre: 'Maria', apellido: 'Gomez'},
  {id: '3', nombre: 'Carlos', apellido: 'Lopez'},
  {id: '4', nombre: 'Ana', apellido: 'Martinez'},
  {id: '5', nombre: 'Luis', apellido: 'Garcia'},
  {id: '6', nombre: 'Sofia', apellido: 'Rodriguez'},
  {id: '7', nombre: 'Miguel', apellido: 'Hernandez'},
  {id: '8', nombre: 'Laura', apellido: 'Sanchez'},
  {id: '9', nombre: 'Diego', apellido: 'Ramirez'},
  {id: '10', nombre: 'Elena', apellido: 'Torres'}
]);

//#region styles
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
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <view style = {styles.item}>
        <text style = {styles.text} >{item.nombre} {item.apellido}</text>
      </view>
    )}
    />
  )
}