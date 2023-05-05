import React, { useContext, useEffect, useState } from 'react'

import { View, StyleSheet, Image, Text, FlatList, Button } from 'react-native'

const ListaPokemons = ({navigation, pokemons, pokedex, index}) => {

    const lista = index == 0 ? pokemons : pokedex

    return (
        <View style={styles.app}>
            <FlatList 
                data={lista}
                numColumns={2}
                key={item => item.id}
                keyExtractor={item => item.id}
                renderItem= {({item}) => {
                    return (
                        <View style={styles.item}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.sprites.front_default,
                                }}
                            />
                            <Text>{item.name}</Text>
                            <Button
                                title="Detalhes"
                                onPress={() => navigation.navigate("Detalhes", {pokemon: item})}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ListaPokemons

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        maxWidth: '100%',
        height: '100%'
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
