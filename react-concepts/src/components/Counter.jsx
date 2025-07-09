import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/Counter';

const Counter = (prop) => {
    const counterContext = useContext(CounterContext);
    console.log("Context comp : ", counterContext);
    console.log("Step props : ", prop);
  return (
    <div>
      <button onClick = {() => {counterContext?.setCount(counterContext?.count + 1)}}> Increment </button>
      <button onClick = {() => counterContext?.setCount(counterContext?.count - 1)}> Decrement </button>
    </div>
  )
}

export default Counter;
