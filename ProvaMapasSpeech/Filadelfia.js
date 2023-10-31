import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  StatusBar,
  image,
} from "react-native";
import { Marker } from "react-native-maps";

const DATA = [
  {
    id: "1",
    nome: "Filadélfia",
    imageUri:
      "https://ogimg.infoglobo.com.br/in/14872445-cdb-5ec/FT1086A/20141210151234-19284.jpg",
  },
];

export default function Filadelfia() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.4692983, //@40.4692983,-74.9842437,7.71z
          longitude: -74.9842437,
          latitudeDelta: 0.05555, // quanto menor o volume, mais próximo do chão É o zoom
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 40.4692983, //@40.4692983,-74.9842437,7.71z
            longitude: -74.9842437,
          }}
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
