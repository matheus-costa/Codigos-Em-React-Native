import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>
        Inter vai ganhar o bolivar de novo!
      </Text>
      <Text style={[styles.textoCor, styles.textoGrande]}>Matheus!</Text>
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
  textoGrande: {
    fontSize: 20,
  },
  meuNome: {
    fontSize: 20,
    flex: 2,
    color: "#E10832",
    alignItems: "auto",
    justifyContent: "auto",
  },
  textoCor: {
    color: "green",
  },
});
