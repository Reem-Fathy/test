import { createContext, useState } from "react";

export let countrContext= createContext();

export default function CounterContextProvider(props){

   const [counter,setCountr]=useState(10)
// console.log(props,"fyufyufyu");
   function increase(){
    setCountr(Math.random)
   }
    return<countrContext.Provider value={{counter,increase}}>
        {props.children}
         </countrContext.Provider>
}