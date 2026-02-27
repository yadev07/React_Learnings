import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='w-[250px] m-5 p-5 border text-black flex gap-10 justify-center items-center flex-col bg-white'>
          <img className='border h-32 w-32 rounded-full' src={props.profile} alt="Photo" />
          <div className='flex flex-col itens-center justify-center '>
            <h4 className='text-black text-2xl'>{props.name}</h4> 
            <h4 className='text-blue-600 text-xl'> {props.prof}</h4>
            <h4 className='text-black'> Age: {props.age}</h4>
            <h4 className='text-black'> City: {props.city}</h4>
          
          </div>
          <button className='border bg-emerald-500 rounded text-white p-2'>Add Friend</button>
        </div>
    </>
  )
}

export default Card