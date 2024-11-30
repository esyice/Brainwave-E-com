import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti"

function Navbar() {
  return (
    <div className=' justify-around flex pb-4'>
      <Link to='/'>
      <div className='flex'>
        <img className='mt-4 h-[10vh] p-2' src={logo} alt="" />
      <h1 className='mt-4 -ml-4 text-2xl text-slate-400 cursor-pointer p-4'>SHOP</h1>
      </div>  </Link>
      <div className=''>
        <ul className=' flex gap-1 mt-8 p-1 text-slate-400 cursor-pointer'>
          <Link to='/'><li className='border p-2  rounded-s-3xl hover:bg-white hover:text-slate-800 text-xs'> Home </li></Link>
          <Link to='/About'><li className='border p-2 hover:bg-white hover:text-slate-800 text-xs'>About </li></Link>
          <Link to='/Product'><li className='border p-2 hover:bg-white hover:text-slate-800 text-xs'>Product</li></Link>
          <Link to='/Login'><li className='border p-2 rounded-e-3xl hover:bg-white hover:text-slate-800 text-xs'>Login</li></Link>
          <Link to='/Cart'><li className='rounded-md border p-2  ml-4 hover:bg-white hover:text-slate-800 text-xl flex'><TiShoppingCart/><p className='-mt-1 ml-1'>0</p></li></Link>
            
          
        </ul>
      </div>

    </div>
  )

}

export default Navbar