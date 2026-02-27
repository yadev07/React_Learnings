import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='bg-emerald-950 p-5 justify-between flex items-center'>
            <h2 className='text-2xl bg-transparent'>Yadev Singh Nishad</h2>
            <div className='flex gap-10 bg-transparent'>
                <h4 className='text-xl bg-transparent'>About</h4>
                <h4 className='text-xl bg-transparent'>Contact</h4>
                <h4 className='text-xl bg-transparent'>Services</h4>
                <h4 className='text-xl bg-transparent'>Your Account</h4>
            </div>
        </nav>
    </>
  )
}

export default Header