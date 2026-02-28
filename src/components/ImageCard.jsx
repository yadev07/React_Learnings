import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='bg-gray-50 text-black h-[200px] w-[200px] flex flex-col items-center gap-5 m-10 p-3'>
        <img src={props.photo} alt="Photo" />
        <h1 className='text-black'>{props.author}</h1>
    </div>
  )
}

export default ImageCard