'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("Madhav Gediya");
  const FunctionCall = () =>{
    setName("madhav")
  } 
  
  const InnerComponent=()=>{
    return(
        <h1>innerComponent</h1>
    )
  }

  return (
    <main className={styles.main}>
      <InnerComponent/>
      <User name="Madhav Gediya" />
      <User name="Sulok Digital" />
      <User name="IT Company" />
      <h1>{name}</h1>
      <button onClick={FunctionCall}>OK</button>
    </main>
  )
}



const User = (props) => { 
  return(
    <div>
      <h2>{props.name}'s Code</h2>
    </div>
  )
}



