import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

export default function TelaAdicao() {
  const navigation = useNavigation();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  const resultadoSoma = () =>
  {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResultado(sum);
  }

  return (
    <View style={styles.background}>
      <ImageBackground source={require("../images/172.jpg")} style={styles.backgroundImage}/>
      <View style={styles.body}>
        <TextInput 
          style={styles.numberInput}
          onChangeText={(text) => setNum1(text)}
          value={num1}
          keyboardType="numeric"
          placeholder="Primeiro número"
        />
        <View>
          <Text style={{
            color: "#ffffff",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: 50}}>+
          </Text>
        </View>
        <TextInput
          style={styles.numberInput}
          onChangeText={(text) => setNum2(text)}
          value={num2}
          keyboardType="numeric"
          placeholder="Segundo número"
        />
        <View>
          <Text style={{
            color:"#ffffff",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: 50}}>=
          </Text>
          <View style={styles.resultadoContainer}>
            <Text style={{
              color: "#ffffff",
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontSize: 50}}>{resultado}
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Button
            title="Somar"
            onPress={resultadoSoma}
            color="#4e4e4e"/>
        </View>
        <View style={{marginTop: 10}}>
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
            color="#4e4e4e"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create
({
    resultadoContainer:
    {
        marginBottom: 20,

    },

    numberInput:
    {
        // - Campo
        height: 40,
        width: 200,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#4e4e4e",
        borderBlockColor: "#a8a8a8",
        borderRadius: 5,
        // - Texto
        textAlign: "center",
        color: "#aaaaaa",
        fontFamily: "Helvetica",
        fontWeight: "bold",
        
    },

    body:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        marginBottom: 200,
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
})
