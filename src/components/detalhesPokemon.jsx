import { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import ModalMessage from '../components/modal';
import GlobalStateContext from '../global/globalStateContext'


const DetalhesPokemon = ({route, isInPokedex}) => {

    const {pokemon} = route.params

    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    const [showModal, setShowModal] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const modal = () => {
        setShowModal(true)

        setTimeout(() => {
            setShowModal(false)
        }, 1500);
    }

    const adicionarPokemon = (pokemon) => {
        setIsAdded(true)
        setPokedex(prevPokedex => [...prevPokedex, pokemon])

        modal()

    }

    const removerPokemon = (pokemon) => {

        setIsAdded(false)

        const novoPokedex = pokedex.filter(item => item.name !== pokemon.name)

        setPokedex(novoPokedex)

        modal()

    }

    return (
        <View style={styles.container}>
            <ModalMessage  showModal={showModal} isAdded={isAdded}/>

            <View style={styles.linha}>
                <Text style={styles.texts}>Nome: </Text>
                <Text style={styles.propriedades}>{pokemon.name}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texts}>Peso: </Text>
                <Text style={styles.propriedades}>{pokemon.weight}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texts}>Ataques: </Text>
                <View>
                    {pokemon.moves.map((item, index) => {
                        if(index < 5) {
                            return  <Text style={styles.propriedades}>{item.move.name} </Text>
                        }
                    })}
                </View>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texts}>Tipo: </Text>
                {pokemon.types.map((item) => {
                    return  <Text style={styles.propriedades}>{item.type.name}</Text>       
                })}
            </View>

            <View style={styles.buttons}>
                <Button
                    title={!isInPokedex ? 'Adicionar à pokedex' : 'Remover da pokedex' }
                    onPress={!isInPokedex ? () => adicionarPokemon(pokemon) : () => removerPokemon(pokemon)}
                />
            </View>


        </View>
    )
}

export default DetalhesPokemon;


const styles = StyleSheet.create({

    container: {
        margin: 24,
        display: 'flex',
        
    },

    linha: {
        flexDirection: 'row'
    },

    texts: {
        fontSize: 24,
        marginTop: 16,
        fontWeight: 'bold',
    },

    propriedades: {
        fontSize: 24,
        marginTop: 16,
    },

    buttons: {
        marginTop: 18
    }


  });
