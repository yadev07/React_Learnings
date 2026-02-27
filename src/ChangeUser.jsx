import React, { useState } from 'react'

const ChangeUser = () => {

    // React Hook -> UseState()
  let [user, setuser] = useState('Shubham')

  const change = () => {
    setuser((user == 'Shubham')? "Yadev":"Shubham")
  }
    
  return (
    <div>
        <h1>Hello {user}</h1>
        <button onClick={change}>Change user</button>
    </div>
  )
}

export default ChangeUser