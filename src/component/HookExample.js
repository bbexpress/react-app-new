import React, {useState} from 'react';

function HookExample(props) {
    const[count, setCount] = useState(0);
    // const[color, setColor] = useState("red");
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick = {() => setCount(count +1)}>Click</button>
        </div>
    );
}

export default HookExample;