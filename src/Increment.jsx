import React, { useState } from 'react'

const Increment = () => {

    let [a, setA] = useState(0);

    const inc = () => {
        setA(a+1)
    }
    const dec = () => {
        setA(a-1)
    }

  return (
    <div>
        <h1 className='text-3xl bg-pink-700 text-black'>Count is {a}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Increment