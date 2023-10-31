import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, FlatList } from "react-native";
import { Marker } from "react-native-maps";

export default function AfricaDoSul() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.077733,
          longitude: 27.4485867,
          latitudeDelta: 0.0555, // quanto menor o volume, mais próximo do chão É o zoom
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 26.077733,
            longitude: 27.4485867, //-
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
