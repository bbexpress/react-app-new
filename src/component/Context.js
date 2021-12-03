import React from 'react'
import { useState, createContext,useContext } from 'react'
import Context2 from './Context2'
const UserContext = createContext();

export default function Context() {

    const [user,setUser] = useState("dave miller");


    return (
        <div>
            <UserContext.Provider value ={user}>
            <h1>Hello {user}!</h1>
            <Context2 />
            </UserContext.Provider>
        </div>
    )
}
