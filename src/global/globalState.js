import axios from 'axios'
import React, {useState, useEffect} from 'react'
import GlobalStateContext from './globalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pokemon?offset=20&limit=20`)
        .then(response => setPokemonNames(response.data.results))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const listPokemons = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then( response => {
                listPokemons.push(response.data)
                if(listPokemons.length === 20) {
                    setPokemons(listPokemons)
                }
            }
                
            )
            .catch(err => console.log(err))
        })
    }, [pokemonNames] )

    const data = {pokemons, setPokemons, pokedex, setPokedex }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState