import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    nome: "Vip",
    imageUri:
      "https://img.freepik.com/vetores-premium/dourado-simbolo-de-exclusividade-o-rotulo-vip-com-glitter-pessoa-muito-importante-icone-vip_123447-68.jpg?w=996",
  },
  {
    id: "2",
    nome: "Top",
    imageUri:
      "https://media.istockphoto.com/id/177765062/pt/foto/top-de-palavra-sobre-fundo-amarelo.webp?s=2048x2048&w=is&k=20&c=GxPRSoberbp1jXyXk-G9GX2wwcplEPrTJ0SYW9mHi2M=",
  },
  {
    id: "3",
    nome: "OpenBar",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/Open_Bar_Multishow.png/270px-Open_Bar_Multishow.png",
  },
];

export default function App() {
  const [qntAdultos, setQntAdultos] = useState("0");
  const [qntCriancas, setQntCriancas] = useState("0");
  let resultado = 0;

  const AcaoDoClique = (item) => {
    resultado = parseFloat(qntAdultos);
    parseFloat(qntCriancas);

    if (item.id == "1") {
      resultado = resultado + qntAdultos * 10 + qntCriancas * 5;
    } else if (item.id == "2") {
      resultado = resultado + qntAdultos * 20 + qntCriancas * 10;
    } else if (item.id == "3") {
      resultado = resultado + qntAdultos * 30 + qntCriancas * 20;
    }
    Speech.speak("O Resultado do ingresso é R$" + resultado.toFixed(2), {
      language: "pt-BR",
    });
    alert("O Resultado do ingresso é R$" + resultado.toFixed(2));
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
      <Text>Quantidade de Adultos</Text>
      <TextInput
        placeholder="Quantidade de Adultos:"
        keyboardType="numeric"
        onChangeText={(qntAdultos) => setQntAdultos(qntAdultos)}
        value={qntAdultos}
      ></TextInput>
      <Text>Quantidade de Crianças</Text>
      <TextInput
        placeholder="Quantidade de Crianças:"
        keyboardType="numeric"
        onChangeText={(qntCriancas) => setQntCriancas(qntCriancas)}
        value={qntCriancas}
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
