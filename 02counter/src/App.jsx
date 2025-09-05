import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let[counter,SetCounter]=useState(0);

  const addValue=()=>{
    console.log("button clicked",counter);

   if(counter<20)SetCounter(counter+1);
   else{
     console.log("cannot go above 20");
   }
  }
  const substractValue=()=>{
    console.log("button clicked",counter);
   if(counter>0)SetCounter(counter-1);
   else{
     console.log("cannot be negative");
   }
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}>Add value:{counter}</button>
    <br></br>
    <button onClick={substractValue}>Substract value:{counter}</button>

    </>
  )
}

export default App
