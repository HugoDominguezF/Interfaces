
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Persona } from "./Model/Entities/PersonaModel";
import { IndexVM } from "./ViewModel/IndexVM";

const vm = new IndexVM();


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
    data = {vm.Personas}
    keyExtractor={(item) => item.Id.toString()}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <TouchableOpacity onPress={() => vm.PersonaSeleccionada = item}>
          <Text style = {styles.text} >{item.Nombre} {item.Apellido}</Text>
        </TouchableOpacity>
      </View>
    )}
    />


  )


}