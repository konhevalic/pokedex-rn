import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import DetalhesPokemon from '../../components/detalhesPokemon';
import ModalMessage from '../../components/modal';
import GlobalStateContext from '../../global/globalStateContext'


const Detalhes = ({navigation, route}) => {

    const {pokedex} = useContext(GlobalStateContext)

    const {pokemon} = route.params

    const [isInPokedex, setIsInPokedex] = useState(false)

    const indexPokemon = pokedex.findIndex((item) => item.name === pokemon.name)

    useEffect(() => {
        if(indexPokemon < 0) {
            setIsInPokedex(false)
        } else {
            setIsInPokedex(true)
        }
    }, [indexPokemon])

    return (
        <DetalhesPokemon 
            navigation={navigation} 
            route={route} 
            isInPokedex={isInPokedex}
        />
    )
}

export default Detalhes;
