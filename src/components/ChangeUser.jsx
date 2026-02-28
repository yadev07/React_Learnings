import React, { useState } from 'react'

const ChangeUser = () => {

    // React Hook -> UseState()
  let [user, setuser] = useState('Shubham')

  const change = () => {
    setuser((user == 'Shubham')? "Yadev":"Shubham")
  }
    
  return (
    <div>
        <h1 className='bg-yellow-500 inline-block m-10 text-3xl'>Hello {user}</h1>
        <button className='text-black bg-green-500 p-1 rounded' onClick={change}>Change user</button>
    </div>
  )
}

export default ChangeUser