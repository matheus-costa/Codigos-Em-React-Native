import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ManterProdutos from './src/screens/Produtos/ManterProdutos';

import { Produtos } from './src/model/Produtos';
import ListaProdutos from './src/screens/Produtos/ListaProdutos';
import { Database } from './src/database/Database';

function ListarScreen({ }) {
  return (
    <ListaProdutos></ListaProdutos>
  );
}
function ManterScreen({ }) {
  return (
   <ManterProdutos></ManterProdutos>
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
      <Drawer.Navigator initialRouteName="Manter Produtos">
        <Drawer.Screen name="Manter Produtos" component={ManterScreen} 
          initialParams={{ produtos: new Produtos() }}/>
        <Drawer.Screen name="Listar Produtos" component={ListarScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}