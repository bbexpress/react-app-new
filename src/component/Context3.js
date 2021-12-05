import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context'



export default function Context3() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>In Context3</h1>
            <h2>{user}</h2>
        </div>
    )
}
