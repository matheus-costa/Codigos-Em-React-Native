import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet,View,Text, TextInput } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  const [Login, setNome] = useState("");
  const [Senha, setSenha] = useState("");

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Logar">
        <Drawer.Screen name="Logar" component={LogarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function LogarScreen({ navation }) {
  const [Login, setNome] = useState("");
  const [Senha, setSenha] = useState("");
  return (
    <View style={styles.container}>
     <Text>Login</Text>
      <TextInput
        placeholder="Login:"
        onChangeText={(Login) => setLogin(Login)}
        value={Login}
      ></TextInput>
      <Text>Senha</Text>
      <TextInput
        placeholder="Senha:"
        keyboardType="numeric"
        onChangeText={(Senha) => setSenha(Senha)}
        value={Senha}
      ></TextInput>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
