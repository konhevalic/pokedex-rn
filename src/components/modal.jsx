import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../global/globalStateContext'

import { View, StyleSheet, Image, Text, FlatList, Button, Modal } from 'react-native'

const ModalMessage = ({showModal, isAdded}) => {

    const {pokedex} = useContext(GlobalStateContext)

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {isAdded ? (
                        <Text>Pokemon adicionado à pokedex</Text>
                        ) : (
                            <Text>Pokemon removido da pokedex</Text>
                        )
                    }
                </View>
            </View>
        </Modal>

    )
}

export default ModalMessage


const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

  });