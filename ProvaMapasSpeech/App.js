import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AfricaDoSul from "./AfricaDoSul";
import Filadelfia from "./Filadelfia";
import PortoAlegre from "./PortoAlegre";
import Lista from "./Lista";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AfricaDoSul">
        <Drawer.Screen name="Africa do Sul" component={AfricaDoSulScreen} />
        <Drawer.Screen name="Filadelfia" component={FiladelfiaScreen} />
        <Drawer.Screen name="Porto Alegre" component={PortoAlegreScreen} />
        <Drawer.Screen name="Lista" component={ListaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function ListaScreen({ navigation }) {
  return <Lista></Lista>;
}
function AfricaDoSulScreen({ navigation }) {
  return <AfricaDoSul></AfricaDoSul>;
}
function FiladelfiaScreen({ navigation }) {
  return <Filadelfia></Filadelfia>;
}
function PortoAlegreScreen({ navigation }) {
  return <PortoAlegre></PortoAlegre>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
