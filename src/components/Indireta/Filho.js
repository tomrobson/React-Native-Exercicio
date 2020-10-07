import React from 'react'
import { Button } from 'react-native'

export default props => {
    function geraNumero(min, max) {
        const fator = max - min + 1
        return Math.floor(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function() {
                const n = geraNumero(props.min, props.max)
                props.funcao(n, 'O valor é: ')
            }}
        />
    )
}