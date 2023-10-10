import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Speech from "expo-speech";
import { Button, TextInput, View, Text, Pressable } from "react-native";

export default function OpMat() {
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
    <View>
      <TextInput
        keyboardType="numeric"
        placeholder="Digite o valor 1:"
        onChangeText={(val1) => setValor1(val1)}
        value={valor1}
      ></TextInput>

      <TextInput
        keyboardType="numeric"
        placeholder="Digite o valor 2:"
        onChangeText={(val2) => setValor2(val2)}
        value={valor2}
      ></TextInput>

      <View>
        <Pressable title="Somar" onPress={soma}>
          <Text>Somar</Text>
        </Pressable>

        <Pressable title="Subtrair" onPress={subtrai}>
          <Text>Subtrair</Text>
        </Pressable>

        <Pressable title="Multiplicar" onPress={multiplica}>
          <Text>Multiplicar</Text>
        </Pressable>

        <Pressable title="Dividir" onPress={divide}>
          <Text>Dividir</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}