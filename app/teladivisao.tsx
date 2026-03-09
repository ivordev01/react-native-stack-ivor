import { useNavigation } from "expo-router";
import { Button, View } from "react-native";

export default function TelaAdicao() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Divisão" onPress={() => navigation.goBack()} />
    </View>
  );
}
