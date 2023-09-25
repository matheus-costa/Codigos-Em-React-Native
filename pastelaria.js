import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [qntCarne, setQntCarne] = useState("0");
  const [qntFrango, setQntFrango] = useState("0");
  const [qntQueijo, setQntQueijo] = useState("0");
  const [qntVento, setQntVento] = useState("0");
  let resultado = 0;

  const calcularTotal = () => {
    resultado =
      parseFloat(qntCarne) * 5.3 +
      parseFloat(qntFrango) * 4.7 +
      parseFloat(qntQueijo) * 4.0 +
      parseFloat(qntVento) * 8.0;
    alert("O resultado é: " + resultado.toFixed(2));
    Speech.speak("O Valor total é R$: " + resultado.toFixed(2), {
      language: "pt-BR",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Quantidade Pasteis Carne</Text>
      <TextInput
        placeholder="Qnt Carne"
        keyboardType="numeric"
        onChangeText={(qntCarne) => setQntCarne(qntCarne)}
        value={qntCarne}
      ></TextInput>
      <Text>Quantidade Pasteis Frango</Text>
      <TextInput
        placeholder="Qnt Frango"
        keyboardType="numeric"
        onChangeText={(qntFrango) => setQntFrango(qntFrango)}
        value={qntFrango}
      ></TextInput>
      <Text>Quantidade Pasteis Queijo</Text>
      <TextInput
        placeholder="Qnt Queijo"
        keyboardType="numeric"
        onChangeText={(qntQueijo) => setQntQueijo(qntQueijo)}
        value={qntQueijo}
      ></TextInput>
      <Text>Quantidade Pasteis Vento</Text>
      <TextInput
        placeholder="Qnt Vento"
        keyboardType="numeric"
        onChangeText={(qntVento) => setQntVento(qntVento)}
        value={qntVento}
      ></TextInput>

      <Button title="Calcular Valor Total" onPress={calcularTotal}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
