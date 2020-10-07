import React from 'react'
import Filho from './Filho'

export default () => {
    let x = 10
    let y = 100

    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 50} b={y + 50} />
        </>
    )
}