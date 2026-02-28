import React, { useState } from 'react'

const FormHandling = () => {

    const [content, setcontent] = useState('')
  
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(content);
        setcontent('');
    }
  
    return (
    <>
        <form onSubmit={submitHandler}>
            <input 
            value = {content}
            onChange={(e) => {
                setcontent(e.target.value);
            }}
            className='bg-white m-5 rounded p-1 pl-3 text-black'
            type="text"
            placeholder='Enter your text here'
             />
             <button className='bg-emerald-600 px-5 py-2 rounded '>Submit</button>
        </form>   
        <div className='opacity-0' id='display'>
            <h1>You are Entering: {content}</h1>
        </div>
    </>
  )
}

export default FormHandling