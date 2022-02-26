import React, { useState } from 'react';

const Counter = ({ initialValue, step }) => {

const [count, setCount] = useState( initialValue );

const add = () => setCount (count + step)
const subtract = () => setCount((c) => c - step)
const reset = () => setCount(initialValue)

  return (
    <>
        <h1>Counter</h1>
        <h2>{ count }</h2>

        <button onClick={ add }> +{ step } </button>
        <button onClick={ reset }> Reset </button>
        <button onClick={ subtract }> -{ step } </button>
    </>
  )
}

export default Counter