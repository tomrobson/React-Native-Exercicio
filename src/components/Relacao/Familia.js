import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style={[Estilo.txtG, style.DisplayTitulo]}>Membros da Família:</Text>
            {props.children}
        </>
    )
}

const style = StyleSheet.create({
    DisplayTitulo: {
        color: "#FFF"
    }
})