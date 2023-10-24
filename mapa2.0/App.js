import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ExMapsIdeau from "./ExMapsIdeau";
import ExMapsIfsul from "./ExMapsIfsul";
import ExMapsUni from "./ExMapsUni";
import ExLista from "./ExLista";
import ExTodos from "./ExTodos";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ExMapsIfsul">
        <Drawer.Screen name="ExMapsIfsul" component={ExMapsIfsulScreen} />
        <Drawer.Screen name="ExMapsIdeau" component={ExMapsIdeauScreen} />
        <Drawer.Screen name="ExMapsUni" component={ExMapsUniScreen} />
        <Drawer.Screen name="ExLista" component={ExListaScreen} />
        <Drawer.Screen name="ExTodos" component={ExTodosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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
function ExListaScreen({ navigation }) {
  return <ExLista></ExLista>;
}
function ExTodosScreen({ navigation }) {
  return <ExTodos> </ExTodos>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
