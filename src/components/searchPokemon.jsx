import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Button, TextInput, ActivityIndicator } from 'react-native'
import GlobalStateContext from '../global/globalStateContext'

import { BASE_URL } from '../constants/url'

import axios from 'axios'

const SearchPokemon = () => {

    const {setPokemons} = useContext(GlobalStateContext)

    const [inputPokemon, setInputPokemon] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const fetchPokemon = () => {
        if(inputPokemon) {
            const listPokemons = []
            axios.get(`${BASE_URL}/pokemon/${inputPokemon}`)
            .then( response => {
                listPokemons.push(response.data)
                setPokemons(listPokemons)
            })
            .catch(err => console.log(err))
        }
    }

    const clearSearch = () => {
        
        axios.get(`${BASE_URL}/pokemon?offset=20&limit=20`)
        .then(response => {
            setIsLoading(true)
            const pokemonsResults = response.data.results
            
            const listPokemons = []
            pokemonsResults.forEach((item) => {
                axios.get(item.url)
                .then( response => {
                    listPokemons.push(response.data)
                    if(listPokemons.length === 20) {
                        setPokemons(listPokemons)
                    }
                    
                })
                .catch(err => console.log(err))
            })
            setIsLoading(false)
        })
        .catch(err => console.log(err))

        setInputPokemon("")
        
    }

    

    return (
        <View style={styles.container}>
            {isLoading && (
                <ActivityIndicator color={"#fff"} />
            )}
            <TextInput
                onChangeText={(pokemon) => setInputPokemon(pokemon)}
                placeholder="Pesquise seu pokemon"
                value={inputPokemon}
                style={styles.input}
            />
            <View style={styles.buttons}>
                <Button 
                    onPress={() => fetchPokemon()}
                    title="Buscar"
                    color="green"
                />
                <Button 
                    onPress={() => clearSearch()}
                    title="Limpar"
                    color="red"
                />
            </View>
            
        </View>
    )
}

export default SearchPokemon;

const styles = StyleSheet.create({

    container: {
        
        margin: 12
      },

    input: {
        minWidth: '75%',
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#fff',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12
    }

  });