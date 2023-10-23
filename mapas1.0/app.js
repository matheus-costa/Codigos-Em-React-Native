import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Exmaps from './Exmaps';
import ExmapsIdeau from './ExmapsIdeau';
import ExmapsUni from './ExmapsUni';

function ExmapsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ExmapsIdeauScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ExmapsUniScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="IFSUL" component={HomeScreen} 
        options={{
          tabBarIcon: () => (<Image source={require("./assets/if.jpeg")} style={{width: 20, height: 20}} />)
      }}/>
        <Tab.Screen name="UNIPAMPA" component={SettingsScreen} 
        options={{
            tabBarIcon: () => (<Image source={require("./assets/unipampa.jpg")} style={{width: 20, height: 20}} />)
      }}/>
      <Tab.Screen name="IDEAU" component={SettingsScreen} 
        options={{
            tabBarIcon: () => (<Image source={require("./assets/ideau.png")} style={{width: 20, height: 20}} />)
      }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}