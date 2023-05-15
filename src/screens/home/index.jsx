import React, { useContext, useEffect, useState } from 'react'
import { useNavigationState } from '@react-navigation/native';
import GlobalStateContext from '../../global/globalStateContext'

import { View, StyleSheet, Image, Text, FlatList, Button } from 'react-native'
import ListaPokemons from '../../components/listaPokemons'
import SearchPokemon from '../../components/searchPokemon';

const Home = ({navigation}) => {

    const {pokemons} = useContext(GlobalStateContext)

    const navigationState = useNavigationState((state) => state); 
    const { index } = navigationState;

    return (
      <View>
        <SearchPokemon />
        <ListaPokemons 
            navigation={navigation}
            pokemons={pokemons}
            index={index}
        />
      </View>
        
    )
}

export default Home

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        maxWidth: '100%'
      },
      item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 2,
        borderRadius: 8.0,
        color: '#aaa',
      },
      image: {
        width:150,
        height:150,
        resizeMode:'contain',
        margin:8, 
    }
  });
