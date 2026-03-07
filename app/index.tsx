import { useNavigation } from "expo-router";
import { Button, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type Screens = {
  telaadicao: undefined;
  telasubtracao: undefined
};

type NavigationProps = NativeStackNavigationProp<Screens>;

export default function Index() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Adição"
        onPress={() => navigation.navigate("telaadicao")}/>

      <Button
        title="Subtração"
        onPress={() => navigation.navigate("telasubtracao")}/>

        
    </View>
  );
}
