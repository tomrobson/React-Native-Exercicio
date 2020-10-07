import React, { useState } from 'react'
import { Text } from 'react-native'

import Estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    function exibirValor(numero, text) {
        setNum(numero)
        setText(text)
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                {text}{num}
            </Text>
            <Filho 
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}