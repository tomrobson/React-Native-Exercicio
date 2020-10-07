import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => {
    const result = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <Text style={estilo.txtG}>O numero aleatorio é {result}</Text>
    )
}