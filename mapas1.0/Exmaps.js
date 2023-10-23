import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -31.3302738,
          longitude: -54.0719644,
          latitudeDelta: 0.0222, // quanto menor o volume, mais próximo do chão É o zoom
          longitudeDelta: 0.0421,
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
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
