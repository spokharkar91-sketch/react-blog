'use client'
import { useState } from "react"

export default function Counter(){
   const[counter,setCounter]=useState(0)
   
    const onePlus = () =>{
        setCounter(counter+1)
    }

    const oneMinus = () =>{
        setCounter(counter-1)
    }

    const oneZero = () =>{
        setCounter(0)

    }
    
    return(
       <div className="suyash">
            <h1 className="dis"> {counter}</h1><br/>
          <button className="butt1" onClick={onePlus}> Increment</button>
          <button className="butt2" onClick={oneMinus}>Decrement</button>
          <button className="butt3" onClick={oneZero}>Reset</button>
        </div>
    )
}