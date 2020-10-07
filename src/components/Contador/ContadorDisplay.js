import React from 'react'
import { Text, StyleSheet } from 'react-native'

import Estilo from '../estilo'

export default props => {
    return (
        <Text style={[Estilo.txtG, style.DisplayText]}>
            {props.num}
        </Text>
    )
}

const style = StyleSheet.create({
    DisplayText:{
        color: '#00A'
    }
})