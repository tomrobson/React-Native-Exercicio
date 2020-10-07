import React from 'react'
import { View, StyleSheet } from 'react-native'

import ContadorV2 from './components/Contador/ContadorV2'
import PaiI from './components/Indireta/Pai'
import PaiD from './components/Direta/Pai'
import Contador from './components/Contador'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Aleatorio from './components/Aleatorio'
import MinMax from './components/MinMax'
import Primeiro from './components/Primeiro'
import CompDefault, { Comp1, Comp2 } from './components/Multi'


export default () => (
    <View style={style.App}>
        <ContadorV2 />

        {/* <PaiI /> */}

        {/* <PaiD /> */}

        {/* <Contador inicial={1} passo={10} />
        <Contador /> */}

        {/* <Botao /> */}

        {/* <Titulo principal="Cadastro Produto"
            segundario="Tela de Cadastro" /> */}
        
        {/* <Aleatorio min="1" max="60" />
        <Aleatorio min="1" max="60" />
        <Aleatorio min="1" max="60" />
        <Aleatorio min="1" max="60" />
        <Aleatorio min="1" max="60" />
        <Aleatorio min="1" max="60" /> */}

        {/* <MinMax min={3} max={20} />
        <MinMax min="5" max="15" />*/}

        {/*<CompDefault />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#AAA',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})