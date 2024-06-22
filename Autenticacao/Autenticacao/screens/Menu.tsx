import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CachorroManter from './CachorroManter';
import HomeScreen from './HomeScreen';

function ManterScreen({ navigation }){
    return (
        <CachorroManter></CachorroManter>
    );
}

function Logout({ navigation }){
    return (
        <HomeScreen></HomeScreen>
    );
}

const Drawer = createDrawerNavigator();

export default function Menu(){
    return (
        <Drawer.Navigator initialRouteName='Cachorro Manter'>
            <Drawer.Screen name='Cachorro Manter' component={ManterScreen} />
            <Drawer.Screen name='Logout' component={Logout} />
            {/* <Drawer.Screen name='Cachorro Listar' component={ListarScreen} /> */}
        </Drawer.Navigator>
    )
}


