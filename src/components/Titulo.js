import React, { Fragment } from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => (
    //também é uma fragment
    //usando quando precisa de exibir mais de dois componetes
    <>
        <Text style={estilo.txtG}>{props.principal}</Text>
        <Text>{props.segundario}</Text>
    </>
    
    // <Fragment>
    //     <Text style={estilo.txtG}>{props.principal}</Text>
    //     <Text>{props.segundario}</Text>
    // </Fragment>
)