import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CarroManter from './CarroManter';
import CarroListar from './CarroListar';
import HomeScreen from './HomeScreen';

function CarroMantScreen({ navigation }) {
    return (
        <CarroManter></CarroManter>
    );
}
function CarroListScreen({ navigation }) {
    return (
        <CarroListar></CarroListar>
    );
}

function Logout({ navigation }){
    return (
        <HomeScreen></HomeScreen>
    );
}



const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator initialRouteName='Manter Cachorro'>
            <Drawer.Screen name="Manter Cachorro" component={CarroMantScreen} />
            <Drawer.Screen name="Listar Cachorro" component={CarroListScreen} />
            <Drawer.Screen name='Logout' component={Logout} />                     
        </Drawer.Navigator>
    );
}