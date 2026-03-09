import { useNavigation } from "expo-router";
import { Button, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type Screens = {
  telaadicao: undefined;
  telasubtracao: undefined;
  telamultiplicacao: undefined;
  teladivisao: undefined
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
      <View style={{ marginBottom: 20 }}>
      <Button
          title="Adição"
          onPress={() => navigation.navigate("telaadicao")}/>
      </View>
     
      <View style={{ marginBottom: 20 }}>
      <Button
        title="Subtração"
        onPress={() => navigation.navigate("telasubtracao")}/>
      </View>

      <View style={{ marginBottom: 20 }}>
      <Button 
        title="Multiplicação"
        onPress={() => navigation.navigate("telamultiplicacao")}/>
      </View>

      <View style={{ marginBottom: 20 }}>
      <Button 
        title="Divisão"
        onPress={() => navigation.navigate("teladivisao")}/>
      </View>
    </View>
  );
}
