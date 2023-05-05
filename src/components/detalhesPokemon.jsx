import { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import ModalMessage from '../components/modal';
import GlobalStateContext from '../global/globalStateContext'


const DetalhesPokemon = ({route, isInPokedex}) => {

    const {pokemon} = route.params

    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    const [showModal, setShowModal] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const adicionarPokemon = (pokemon) => {
        setIsAdded(true)
        setPokedex(prevPokedex => [...prevPokedex, pokemon])

        setShowModal(true)


        setTimeout(() => {
            setShowModal(false)
        }, 1500);

    }

    const removerPokemon = (pokemon) => {

        setIsAdded(false)

        const novoPokedex = pokedex.filter(item => item.name !== pokemon.name)

        setPokedex(novoPokedex)
    }

    return (
        <View>
            <ModalMessage  showModal={showModal} isAdded={isAdded}/>

            <Text>Nome: {pokemon.name}</Text>
            <Text>Peso: {pokemon.weight}</Text>
            <Text>Ataques: {pokemon.moves.map((item, index) => {
                if(index < 5) {
                    return  `${item.move.name}, `
                }
                })}
            </Text>
            <Text>Tipo: {pokemon.types.map((item) => {
                return  `${item.type.name},`
                })}
            </Text>
            {!isInPokedex ? (
                <Button
                    title='Adicionar à pokedex'
                    onPress={() => adicionarPokemon(pokemon)}
                />
            ) : (
                <Button
                    title='Remover da pokedex'
                    onPress={() => removerPokemon(pokemon)}
                />
                )}
        </View>
    )
}

export default DetalhesPokemon;
