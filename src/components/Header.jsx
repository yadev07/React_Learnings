import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
        <nav className='bg-emerald-950 p-5 justify-between flex items-center fixed w-full'>
            <h2 className='text-2xl bg-transparent'>Yadev Singh Nishad</h2>
            <div className='flex gap-10 bg-transparent'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </nav>
    </>
  )
}

export default Header