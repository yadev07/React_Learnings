import React, { useState } from 'react'

const FormHandling = () => {

    const [username, setusername] = useState('')
  
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(username);
        setusername('');
    }
  
    return (
    <>
        <form onSubmit={submitHandler}>
            <input 
            value = {username}
            onChange={(e) => {
                setusername(e.target.value);
            }}
            className='bg-white m-5 rounded p-1 pl-3 text-black'
            type="text"
            placeholder='Enter your text here'
             />
             <button className='bg-emerald-600 px-5 py-2 rounded '>Submit</button>
        </form>   
    </>
  )
}

export default FormHandling