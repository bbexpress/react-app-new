import React from 'react'
import { useState, createContext } from 'react'
import Context2 from './Context2'
const UserContext = createContext();

function Context() {

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

export default Context;
export {UserContext};
