import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='bg-gray-50 text-black h-[400px] w-[250px] flex flex-col items-center gap-5 m-10 p-3'>
        <img className='h-40' src={props.image} alt="Image" />
        <div className='p-2 flex flex-col gap-1 '>
            <h1 className='text-black'>{props.name}</h1>
            <h1 className='text-black text-2xl'>{props.price}</h1>
            <h1 className='text-black text-s'>Category : {props.category}</h1>
        <h1 className='text-blue-500 hover:underline flex mb-0'>Read more</h1>
            
        </div>

    </div>
  )
}

export default ProductCard