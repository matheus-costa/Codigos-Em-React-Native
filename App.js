import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; //dentro do {} estão os meus componentes react native

export default function App() {
  //useState tem que fazer esse import=import { useState } from "react";
  const [valor1, setValor1] = useState(""); //set é usado apenas para atualizar o valor da variável
  const [valor2, setValor2] = useState("");
  //o("") é para dizer por onde o valor começa, neste caso o valor é "0"
  let resultado = 0;
  //const = é de constante! let = é uma variável comum, ela pode mudar.
  //o let renderiza a cada vez que o usuário interage com a tela da aplicação
  //textinput
  const soma = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2); //parseFloat para transformar a variável em float
    alert("O resultado é:" + resultado);
  };
  const subtrair = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2); //parseFloat para transformar a variável em float
    alert("O resultado é:" + resultado);
  };
  const multiplicar = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2); //parseFloat para transformar a variável em float
    alert("O resultado é:" + resultado);
  };
  const dividir = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2); //parseFloat para transformar a variável em float
    alert("O resultado é:" + resultado);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite valor 1:" //marca d'água
        keyboardType="numeric" //tipo de teclado, especifico o tipo de entrada de dados
        onChangeText={(valor1) => setValor1(valor1)} //cada alteração do texto, ele vai atualizando
        value={valor1} //sempre vamos mostrar o valor que o usuário digita
      ></TextInput>
      <TextInput
        placeholder="Digite valor 2:"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
      ></TextInput>
      <Button title="somar" onPress={soma}></Button>
      <Button title="subtrair" onPress={subtrair}></Button>
      <Button title="multiplicar" onPress={multiplicar}></Button>
      <Button title="dividir" onPress={dividir}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

//=> é uma areo function diz que o que está ali é umaa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
