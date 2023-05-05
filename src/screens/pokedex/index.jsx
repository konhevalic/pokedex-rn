import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../global/globalStateContext'

import { View, StyleSheet, Image, Text, FlatList, Button } from 'react-native'
import ListaPokemons from '../../components/listaPokemons'

const Pokedex = ({navigation}) => {

    const {pokedex} = useContext(GlobalStateContext)

    return (
        <ListaPokemons navigation={navigation} pokedex={pokedex}/>
    )
}

export default Pokedex

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap",
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
