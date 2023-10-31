import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, FlatList } from "react-native";
import { Marker } from "react-native-maps";

export default function PortoAlegre() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -30.0368142, //@-30.0368142,-51.3490677
          longitude: -51.3490677,
          latitudeDelta: 0.05555, // quanto menor o volume, mais próximo do chão É o zoom
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -30.0368142, //@-30.0368142,-51.3490677
            longitude: -51.3490677,
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
