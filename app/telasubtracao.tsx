import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TelaSubtracao() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Home" onPress={() => navigation.goBack()} />
      <Text>Tela Dois</Text>
    </View>
  );
}
