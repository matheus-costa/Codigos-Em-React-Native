import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ManterAnimal from './src/screens/Animal/ManterAnimal';

import { Animal } from './src/model/Animal';
import ListaAnimal from './src/screens/Animal/ListaAnimal';
import { Database } from './src/database/Database';

function ListarScreen({ }) {
  return (
    <ListaAnimal></ListaAnimal>
  );
}
function ManterScreen({ }) {
  return (
   <ManterAnimal></ManterAnimal>
  );
}
const Drawer = createDrawerNavigator();


 
export default function App() {
  useEffect(() => {
    // Database.ReinitDb().then(() => console.log("Banco Iniciado")) 
     Database.initDb().then(() => 
     console.log("Banco Iniciado")
     )
   }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Animal">
        <Drawer.Screen name="Manter Animal" component={ManterScreen} 
          initialParams={{ animal: new Animal() }}/>
        <Drawer.Screen name="Listar Animais" component={ListarScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}