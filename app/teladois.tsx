import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TelaDois() {
  const navigation = useNavigation();

  return (
    
      
    <View>
      <Button title="Navegar Botao" onPress={() => navigation.goBack()} />
      <Text>Tela Dois</Text>
    </View>
  );
}
