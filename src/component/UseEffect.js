import React,{ useState, useEffect } from "react";


function Timer(props) {

    // const [count, setCount] = useState(0);
    // const [calculation, setCalculation] = useState(0);
    // const [isOdd, setOdd] = useState("Even");

    // const setOdd =()=> {
    //     setOdd(previousState =>{
    //         if(count % 2 === 0){
    //             return{...previousState, isOdd:"Even"}
    //         }else{
    //             return{...previousState, isOdd:"Odd"}
    //         }
            
    //     });
    // }
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount((count)=> count+1)
    //     },1000);
    // },[])

    // useEffect(()=>{
    //     setCalculation(()=> count *2);
    // },[count])

    // const [user, setUser] = useState({
    //     username: ""
    // });
    // const [message, setMessage] = useState("");

    // const updateMessage =()=> {
    //     setMessage(previousState =>{
    //         return{...previousState, message: "Hello " + user.username}
    //     });
    // }


    const[count, setCount] = useState(0);
    const[even, setEven] = useState("even");

    useEffect(()=>{
        setEven(()=> count % 2 == 0 ? "even" : "odd");
    },[count]);

    const [name, setName] = useState("");
    const [nameGreet, setNameGreet] = useState("");


    return (
        <div>
            <form onSubmit={(event) => {event.preventDefault(); setNameGreet((e)=> name)}}>
                <label htmlFor="nameInput">Name: </label>
                <input type="text" name="nameInput" onChange={(event)=> setName((e)=> event.target.value)} />
                <button type="submit">Submit</button>
                <p>Welcome {nameGreet}!</p>
            </form>

            <p>You've clicked {count} times!</p>
            <button onClick={() => setCount((c)=> c + 1)}>Click me</button>
            <p>The number of times you have clicked is {even}!</p>
            
        </div>
    )
}

export default Timer;