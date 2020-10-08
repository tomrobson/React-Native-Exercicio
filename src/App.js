import React from 'react'
import { View, StyleSheet } from 'react-native'

import ListaProdutos from './components/Produtos/ListaProdutos'
import UsuarioLogado from './components/UsuarioLogado'
import Familia from './components/Relacao/Familia'
import Membro from './components/Relacao/Membro'
import ParImpar from './components/ParImpar'
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
        <ListaProdutos />

        {/* <UsuarioLogado usuario = {{ nome: 'João', email: 'jo@gmail.com' }} />
        <UsuarioLogado usuario = {{ nome: 'Ana' }} />
        <UsuarioLogado usuario = {{ email: 'ana@gmail.com' }} />
        <UsuarioLogado usuario = {null} />
        <UsuarioLogado usuario = {{}} />
        <UsuarioLogado usuario = {{ nome: 'Ana', email: 'ana@gmail.com' }} /> */}

        {/* <Familia>
            <Membro nome = "Bia" sobrenome = "Silva" />
            <Membro nome = "Bruna" sobrenome = "Silva" />
        </Familia>
        <Familia>
            <Membro nome = "Carlos" sobrenome = "Rocha" />
            <Membro nome = "Carla" sobrenome = "Rocha" />
            <Membro nome = "Vanessa" sobrenome = "Rocha" />
            <Membro nome = "João" sobrenome = "Rocha" />
        </Familia> */}

        {/* <ParImpar num={3} /> */}

        {/* <ContadorV2 /> */}

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