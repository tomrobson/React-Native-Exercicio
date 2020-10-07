import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

function Comp () {
    return <Text style={estilo.txtG}>Comp Oficial</Text>
}

function Comp1 () {
    return <Text style={estilo.txtG}>Comp1</Text>
}

function Comp2 () {
    return <Text style={estilo.txtG}>Comp2</Text>
}

export { Comp1, Comp2 }
export default Comp