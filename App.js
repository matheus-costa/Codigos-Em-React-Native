import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const soma = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    alert(`O resultado é ${resultado}`);
  };

  const subtrai = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    alert(`O resultado é ${resultado}`);
  };

  const multiplica = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    alert(`O resultado é ${resultado}`);
  };

  const divide = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    alert(`O resultado é ${resultado}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        keyboardType="numeric"
        placeholder="Digite o valor 1"
        onChangeText={(val1) => setValor1(val1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={styles.inputs}
        keyboardType="numeric"
        placeholder="Digite o valor 2"
        onChangeText={(val2) => setValor2(val2)}
        value={valor2}
      ></TextInput>

      <View style={styles.botoes}>
        <Button title="Somar" onPress={soma}>
          Somar
        </Button>

        <Button title="Subtrair" onPress={subtrai}>
          Subtrair
        </Button>

        <Button title="Multiplicar" onPress={multiplica}>
          Multiplicar
        </Button>

        <Button title="Dividir" onPress={divide}>
          Dividir
        </Button>
      </View>

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
  inputs: {
    marginBottom: "5%",
  },
  botoes: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    maxHeight: "50%",
    width: "100%",
  },
});
