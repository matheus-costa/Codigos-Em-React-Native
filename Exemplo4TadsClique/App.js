import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Speech from "expo-speech";
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const soma = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    alert("O resultado é" + resultado, { language: "pt-BR" });
    Speech.speak("O resultado do cálculo é:" + resultado, {
      language: "pt-BR",
    });
  };

  const subtrai = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    alert("O resultado é" + resultado, { language: "pt-BR" });
    Speech.speak("O resultado do cálculo é:" + resultado, {
      language: "pt-BR",
    });
  };

  const multiplica = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    alert("O resultado é" + resultado, { language: "pt-BR" });
    Speech.speak("O resultado do cálculo é:" + resultado, {
      language: "pt-BR",
    });
  };

  const divide = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    alert("O resultado é" + resultado, { language: "pt-BR" });
    Speech.speak("O resultado do cálculo é:" + resultado, {
      language: "pt-BR",
    });
  };

  return (
    <View style={meuestilo.container}>
      <TextInput
        style={meuestilo.inputs}
        keyboardType="numeric"
        placeholder="Digite o valor 1:"
        onChangeText={(val1) => setValor1(val1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        keyboardType="numeric"
        placeholder="Digite o valor 2:"
        onChangeText={(val2) => setValor2(val2)}
        value={valor2}
      ></TextInput>

      <View style={meuestilo.botoes}>
        <Pressable title="Somar" onPress={soma} style={meuestilo.somar}>
          <Text>Somar</Text>
        </Pressable>

        <Pressable title="Subtrair" onPress={subtrai} style={meuestilo.subtrai}>
          <Text>Subtrair</Text>
        </Pressable>

        <Pressable
          title="Multiplicar"
          onPress={multiplica}
          style={meuestilo.multiplicar}
        >
          <Text>Multiplicar</Text>
        </Pressable>

        <Pressable title="Dividir" onPress={divide} style={meuestilo.dividir}>
          <Text>Dividir</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//ESTILOS
const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708B03",
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
  somar: {
    flex: 1,
    backgroundColor: "#E10832",
    alignItems: "center",
    justifyContent: "center",
  },
  dividir: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  multiplicar: {
    flex: 1,
    backgroundColor: "#4001FF",
    alignItems: "center",
    justifyContent: "center",
  },
  subtrai: {
    flex: 1,
    backgroundColor: "#F8BA35",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#A0A0A0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
