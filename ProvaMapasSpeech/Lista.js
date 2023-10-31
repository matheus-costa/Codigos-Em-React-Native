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
    nome: "Filadélfia",
    populacao: "1.603.797 Habitantes",
    pib: "4,9",
    imageUri:
      "https://ogimg.infoglobo.com.br/in/14872445-cdb-5ec/FT1086A/20141210151234-19284.jpg",
  },
  {
    id: "2",
    nome: "Porto Alegre",
    populacao: "1.332.570 habitantes",
    pib: "21,6",
    imageUri:
      "https://a.cdn-hotels.com/gdcs/production54/d1484/9bba5297-47b5-46e0-931b-abcc17053949.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  {
    id: "3",
    nome: "Africa do Sul",
    populacao: "110.098.176 Habitantes",
    pib: "72.7",
    imageUri:
      "https://www.dnaturismo.com.br/fotos/images/fgd%20%5Breduzido%5D.jpg",
  },
];

export default function ExLista() {
  const navigation = useNavigation();

  const AcaoDoClique = (item) => {
    if (item.id == "1") {
      Speech.speak("Você clicou em: " + item.nome+"População de:" + item.populacao+","+"e"+"Pib de:"+ item.pib, {
        language: "pt-BR",
      });
      navigation.navigate("Filadelfia");
    } else if (item.id == "2") {
      Speech.speak("Você clicou em: " + item.nome+"População de:" + item.populacao+","+"e"+"Pib de:"+ item.pib, {
        language: "pt-BR",
      });
      navigation.navigate("Porto Alegre");
    } else {
      Speech.speak("Você clicou em: " + item.nome+"População de:" + item.populacao+","+"e"+"Pib de:"+ item.pib, {
        language: "pt-BR",
      });
      navigation.navigate("Africa do Sul");
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
