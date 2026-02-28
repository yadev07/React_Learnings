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
        <h1 className='p-4 text-3xl bg-pink-700 text-black inline-block m-10'>Count is {a}</h1>
        <button className='text-black bg-green-500 rounded p-2 mr-2' onClick={inc}>Increment</button>
        <button className='text-black bg-green-500 rounded p-2 mr-2' onClick={dec}>Decrement</button>
        <button className='text-black bg-green-500 rounded p-2 mr-2' onClick={() => {
            setA(0);
        }}>Reset</button>
    </div>
  )
}

export default Increment