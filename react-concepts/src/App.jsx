import './App.css'
import Counter from './components/Counter';
import { useContext, useState } from 'react';
import { CounterContext } from './context/Counter';

function App() {

  const counterState = useContext(CounterContext);
  return (
    <>
     <div>
        <h1> Count is {counterState?.count} </h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
     </div>
    </>
  )
}

export default App;
