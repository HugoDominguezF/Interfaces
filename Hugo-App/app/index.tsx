import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Chupapi muñaño</Text>
      <Button title="Pulsa" onPress={pulsar}/>
    </View>
  );
}

function pulsar(){
  alert('gay')
}
