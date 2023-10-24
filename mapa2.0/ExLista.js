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
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    nome: "Ifsul",
    imageUri:
      "https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8yY2E0ODcyMTJhYWMzN2I3OGQ2NDZmODYwMmE0NGQ2Ni5qcGVn.jpg",
  },
  {
    id: "2",
    nome: "Unipampa",
    imageUri: "https://www.caixa.gov.br/PublishingImages/visa-caixa-tem-v2.png",
  },
  {
    id: "3",
    nome: "Ideau",
    imageUri:
      "https://www.bcb.gov.br/content/estabilidadefinanceira/piximg/logo_pix.png",
  },
];

export default function ExLista() {
  const navigation = useNavigation();

  const AcaoDoClique = (item) => {
    if (item.id == "1") {
      Speech.speak("Você clicou em: " + item.nome, { language: "pt-BR" })
      navigation.navigate("ExMapsIfsul");
    } else if (item.id == "2") {
      Speech.speak("Você clicou em: " + item.nome, { language: "pt-BR" })
      navigation.navigate("ExMapsUni");
    } else {
      Speech.speak("Você clicou em: " + item.nome, { language: "pt-BR" })
      navigation.navigate("ExMapsIdeau");
    }
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
