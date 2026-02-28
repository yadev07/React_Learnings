import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from './ImageCard'

const AxiosHandling = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')
        setData(response.data)

    }
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <>
            <div className='p-10'>
                <div className='p-5 bg-gray-950 flex flex-wrap'>
                    {data.map(function(elem) {
                        return  <ImageCard key={elem.id} author={elem.author} photo={elem.download_url}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default AxiosHandling