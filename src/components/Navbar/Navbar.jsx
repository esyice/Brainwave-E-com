import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='border justify-around flex'>
      <div className='flex'>
        <img className='m-4 text-6xl font-bold p-4' src={logo} alt="" />
        <h1 className='mt-4 -ml-8 text-6xl text-slate-400 cursor-pointer p-4'>SHOP</h1>
      </div>  
      <div className=''>
        <ul className=' flex gap-1 m-4 p-4 text-slate-400 cursor-pointer'>
          <li className='border p-4  rounded-s-3xl hover:bg-white hover:text-slate-800 text-2xl'><Link to='/'> Home </Link></li>
          <li className='border p-4 hover:bg-white hover:text-slate-800 text-2xl'><Link to='/About'>About</Link> </li>
          <li className='border p-4 hover:bg-white hover:text-slate-800 text-2xl'><Link to='/Product'>Product</Link></li>
          <li className='border p-4 rounded-e-3xl hover:bg-white hover:text-slate-800 text-2xl'><Link to='/Login'>Login</Link></li>
        </ul>
      </div>

    </div>
  )

}

export default Navbar