
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Persona } from "./Model/Entities/PersonaModel";
import { IndexVM } from "./ViewModel/IndexVM";

const vm = new IndexVM();
const personas = vm.Personas;


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
    data = {personas}
    keyExtractor={(item) => item.Id.toString()}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <TouchableOpacity onPress={() => vm.personaPress(item) }>
          <Text style = {styles.text} >{item.Nombre} {item.Apellido}</Text>
        </TouchableOpacity>
      </View>
    )}
    />


  )


}