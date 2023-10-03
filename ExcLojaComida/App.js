import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Speech from "expo-speech";
import {
  StyleSheet,
  Pressable,
  FlatList,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

const DATA = [
  {
    id: "1",
    nome: "Avista",
    imageUri:
      "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/d0sqxgkmhjot8ufhzq27",
  },
  {
    id: "2",
    nome: "Aprazo",
    imageUri:
      "https://revista.abrale.org.br/wp-content/uploads/2020/08/shutterstock_423653539-280x280.jpg",
  },
  {
    id: "3",
    nome: "60 dias",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8P-JhGlgAz2TxYzrc50y7upqrNrDwVOve5-bEps7RhGY3pfefQMvczNWoJdOlAjqSjs&usqp=CAU",
  },
];

export default function App() {
  const [nome, setNome] = useState("0");
  const [qntRefrigerantes, setQntRefrigerantes] = useState("0");
  const [qntSalgadinhos, setQntSalgadinhos] = useState("0");
  const [qntSobremessa, setQntSobremessa] = useState("0");
  let resultado = 0;

  const AcaoDoClique = (item) => {
    resultado =
      parseFloat(qntRefrigerantes) * 4.3 +
      parseFloat(qntSalgadinhos) * 5.25 +
      (parseFloat(qntSobremessa) / 1000) * 100;

    if (item.id == "3") {
      //avista acrescimento de 9%
      resultado = resultado + (resultado * 9) / 100;
    } else if (item.id == "2") {
      //aprazo
      resultado = resultado;
    } else if (item.id == "1") {
      // 60 dias, desconto de 8%
      resultado = resultado - (resultado * 8) / 100;
    }
    Speech.speak("O nome do comprador é:" + nome);
    alert("O nome do comprador:" + nome);
    Speech.speak("O Resultado da compra é R$" + resultado.toFixed(2), {});
    alert("O Resultado da compra é R$" + resultado.toFixed(2));
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            styles.title,
          ]}
          onPress={() => {
            AcaoDoClique(item);
          }}
        >
          <View style={styles.alinhamentoLinha}>
            <Image style={styles.image} source={{ uri: item.imageUri }} />
            <View style={styles.alinhamentoColuna}>
              <Text style={styles.itemStyle}>{item.nome} </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Informe o seu nome</Text>
      <TextInput
        placeholder="Informe o seu nome:"
        onChangeText={(nome) => setNome(nome)}
        value={nome}
      ></TextInput>

      <Text>Quantidade de Refrigerantes</Text>
      <TextInput
        placeholder="Quantidade de Refrigerantes:"
        keyboardType="numeric"
        onChangeText={(qntRefrigerantes) =>
          setQntRefrigerantes(qntRefrigerantes)
        }
        value={qntRefrigerantes}
      ></TextInput>

      <Text>Quantidade de Salgadinhos</Text>
      <TextInput
        placeholder="Quantidade de Salgadinhos:"
        keyboardType="numeric"
        onChangeText={(qntSalgadinhos) => setQntSalgadinhos(qntSalgadinhos)}
        value={qntSalgadinhos}
      ></TextInput>

      <Text>Quantidade de Sobremessa</Text>
      <TextInput
        placeholder="Quantidade de Sobremessa em Gramas:"
        keyboardType="numeric"
        onChangeText={(qntSobremessa) => setQntSobremessa(qntSobremessa)}
        value={qntSobremessa}
      ></TextInput>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItemNovo}
      />

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
    marginTop: 100,
  },

  itemStyle: {
    fontSize: 16,
    padding: 5,
    marginLeft: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  alinhamentoLinha: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  alinhamentoColuna: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
});
