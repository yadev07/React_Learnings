import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const RandomProductGenerator = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
        <div className='p-10'>
               
                <div className='p-5 bg-gray-950 flex flex-wrap'>
                    {data.map(function(elem) {
                        return  <ProductCard key={elem.id} name={elem.title} description={elem.description} image={elem.image} category={elem.category} price={elem.price} />
                    })}
                </div>
            </div>
    </>
  )
}

export default RandomProductGenerator