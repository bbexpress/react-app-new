import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function RefHook(props) {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    },[inputValue]);

    return (
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <h1>Total Count: {count.current}</h1>
        </div>
    )
}
