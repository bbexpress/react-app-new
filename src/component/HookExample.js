import React, {useState} from 'react';

function HookExample(props) {
    const[count, setCount] = useState(0);
    const[color, setColor] = useState("red");

    const[car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1984",
        color: "Red"
    }); 
    const updateColor =()=> {
         setCar(previousState =>{
             return{...previousState, color:"Green"}
         });
     }

    // const updateColor =()=> {
    //     setCar({...previousState, color: "Green"})
    // }

    return (
        <div>
            <h1>My Favorite Color is {color}</h1>
            <p>You Clicked {count} times</p>
            <button onClick = {() => setCount(count +1)}>Count</button>
            <button onClick = {() => updateColor("green")}>Color</button>

            <h1>My car {car.model}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
        </div>
    );
}

export default HookExample;