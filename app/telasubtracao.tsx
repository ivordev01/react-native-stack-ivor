import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

export default function TelaSubtracao() {
  const navigation = useNavigation();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const subtracao = () => 
  {
    const subtracao = parseFloat(num1) - parseFloat(num2);
    setResultado(subtracao);
  };

  return (
    <View style={styles.background}>
      <ImageBackground source={require("../images/172.jpg")} style={styles.backgroundImage} />
      
      <View style={styles.body}>
        <TextInput 
          style={styles.numberInput}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
          placeholder="Primeiro número"
          placeholderTextColor="#888888"
        />

        <Text style={styles.operatorText}>-</Text>

        <TextInput
          style={styles.numberInput}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
          placeholder="Segundo número"
          placeholderTextColor="#888888"
        />

        <Text style={styles.operatorText}>=</Text>

        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoText}>
            {resultado !== null ? resultado : '?'}
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <Button title="Subtrair" onPress={subtracao} color="#4e4e4e" />
          <View style={{ height: 20 }} /> 
          <Button title="Voltar" onPress={() => navigation.goBack()} color="#4e4e4e" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background:
  {
    flex: 1,
    backgroundColor: "#141414",
  },

  backgroundImage:
  {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1,
  },

  body:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  numberInput: 
  {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#4e4e4e",
    borderColor: "#a8a8a8",
    borderRadius: 5,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },

  operatorText: 
  {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 10,
  },

  resultadoContainer: 
  {
    marginBottom: 20,
  },

  resultadoText: 
  {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
  },
  
  buttonGroup: {
    width: 200,
    marginTop: 20,
  }
});