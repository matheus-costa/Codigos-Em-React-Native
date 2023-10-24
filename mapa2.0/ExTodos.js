import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";
import ExMapsIdeau from "./ExMapsIdeau";
import ExMapsIfsul from "./ExMapsIfsul";
import ExMapsUni from "./ExMapsUni";

export default function ExTodos() {
  //@-31.310204,-54.1330044,
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -31.310204, //abre inicialmente
          longitude: -54.1330044,
          latitudeDelta: 0.1234, // quanto menor o volume, mais próximo do chão É o zoom
          longitudeDelta: 0.1234,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.332263,
            longitude: -54.071966,
          }}
          title={"Titulo do Marcador"}
          description={"Aqui vai mais informação"}
        ></Marker>
        <Marker
          coordinate={{
            latitude: -31.375521,
            longitude: -54.10431,
          }}
          title={"Titulo do Marcador"}
          description={"Aqui vai mais informação"}
        ></Marker>
        <Marker
          coordinate={{
            latitude: -31.3063767,
            longitude: -54.065305,
          }}
          title={"Titulo do Marcador"}
          description={"Aqui vai mais informação"}
        ></Marker>
      </MapView>
    </View>
  );
}

function ExMapsIfsulScreen({ navigation }) {
  return <ExMapsIfsul></ExMapsIfsul>;
}
function ExMapsIdeauScreen({ navigation }) {
  return <ExMapsIdeau></ExMapsIdeau>;
}
function ExMapsUniScreen({ navigation }) {
  return <ExMapsUni></ExMapsUni>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
