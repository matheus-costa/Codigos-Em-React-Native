import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
    nome: "Diego",
    idade: "40",
  },
  {
    id: "2",
    title: "Second Item",
    nome: "Jenifer",
    idade: "21",
  },
  {
    id: "3",
    title: "Third Item",
    nome: "Endrio",
    idade: "22",
  },
  {
    id: "4",
    title: "For Item",
    nome: "Jonas",
    idade: "20",
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={meuestilo.item}>
      <Text style={meuestilo.id}>{item.id}</Text>
      <Text style={meuestilo.title}>{item.title}</Text>
      <Text style={[meuestilo.title, meuestilo.cor]}>{item.nome}</Text>
      <Text style={[meuestilo.title, meuestilo.cor]}>{item.idade}</Text>
    </View>
  );

  return (
    <SafeAreaView style={meuestilo.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        // item é o banco de dados segmentado por id
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "yellow",
  },
  cor: {
    color: "green",
  },
});

export default App;
