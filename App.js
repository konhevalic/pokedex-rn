import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GlobalState from './src/global/globalState'

import Home from './src/screens/home';
import Detalhes from './src/screens/detalhes';
import Pokedex from './src/screens/pokedex';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const ListaPokemons = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListaPokemons" component={ListaPokemons} options={{headerShown: false }} />
          <Stack.Screen name="Detalhes"component={Detalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
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
