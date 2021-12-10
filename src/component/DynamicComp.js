import React from 'react'
import UserA from './UserA'
import UserB from './UserB'

const components={
    usera:UserA,
    userb:UserB
}

export default function DynamicComp(props) {

    const SelectUser = components[props.user];

    return (
        <SelectUser />
    )
}
