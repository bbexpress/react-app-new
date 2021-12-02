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

    const [user, setUser] = useState({
        username: ""
    });
    const [message, setMessage] = useState("");

    const updateMessage =()=> {
        setMessage(previousState =>{
            return{...previousState, message: "Hello " + user.username}
        });
    }


    return (
        <div>
            <form>
                <input type="text" id="fname" name="fname" value="name"></input>
                <input type="submit" value="Submit" onClick={setUser(this.fname)}></input>
            </form> 
            
            <h2>{user}{message}</h2>
            
        </div>
    )
}

export default Timer;