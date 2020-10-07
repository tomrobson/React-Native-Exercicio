import React from 'react'
import { View, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'
import Primeiro from './components/Primeiro'
import CompDefault, { Comp1, Comp2 } from './components/Multi'


export default () => (
    <View style={style.App}>
        <MinMax min={3} max={20} />
        <MinMax min="5" max="15" />

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