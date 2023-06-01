import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  './style.css' 
import { Cart } from '../Context';

const Header = () => {

  const {cart} = useContext(Cart);
  return (
    <div>
        <h1 className='header text-[35px] text-gray-400	 py-3 text-center'>Shopping Cart App</h1>
        <ul className="nav flex bg-gray-300 font-bold text-lg items-center justify-around py-7">
            <li className="text-white hover:text-violet-400">
                <Link to="/">Home Page</Link>
            </li>
            <li className="text-white hover:text-violet-400">
            <Link to="/cart">
              Cart 
            ({cart.length}) 
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header