import { useNavigation } from "expo-router";
import { Button, ImageBackground, StyleSheet, View } from "react-native";
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
    <View style={styles.background}>
      <ImageBackground source={require("../images/172.jpg")} style={styles.backgroundImage}/>
      <View style={styles.body}/>
        <View style={styles.container}>
          <View style={styles.centerbuttons}>
            <View style={styles.adicaobutton}>
              <Button
                  title="Adição"
                  onPress={() => navigation.navigate("telaadicao")}
                  color="#4e4e4e"/>
            </View>
          
            <View style={styles.subtracaobutton}>
              <Button
                title="Subtração"
                onPress={() => navigation.navigate("telasubtracao")}
                color="#4e4e4e"/>
            </View>

            <View style={styles.multiplicacaobutton}>
              <Button 
                title="Multiplicação"
                onPress={() => navigation.navigate("telamultiplicacao")}
                color="#4e4e4e"/>
            </View>

            <View style={styles.divisaobutton}>
              <Button 
                title="Divisão"
                onPress={() => navigation.navigate("teladivisao")}
                color="#4e4e4e"/>
              </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create
({
   body:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    background:
    {
      flex: 1,
      backgroundColor: "#141414"
    },

    backgroundImage:
    {
      flex: 1,
      opacity: 0.1,
    },

    container:
    {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    centerbuttons:
    {
      flex: 1,                
      justifyContent: "center",  
      alignItems: "center",
      marginBottom: 300,
    },

    adicaobutton:
    {
        marginBottom: 20,
        width: 150,
    },

    subtracaobutton:
    {
        marginBottom: 20,
        width: 150,
    },
    multiplicacaobutton:
    {
        marginBottom: 20,
        width: 150,
    },
    divisaobutton:
    {
        marginBottom: 20,
        width: 150,
    },
})
