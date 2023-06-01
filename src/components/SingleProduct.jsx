import React, { useContext } from 'react'
import { Cart } from '../Context';

const SingleProduct = ({ prod }) => {

  const {cart, setCart} = useContext(Cart);

  return (
    <div className='products flex flex-col bg-zinc-400 p-3 rounded-xl'>
      <img className='rounded-md' src={prod.image} alt={prod.name} />
      <div className="productDesc font-bold text-lg flex justify-between py-3 text-gray-700">
        <span>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          onClick={() => {
            setCart(cart.filter(c => c.id !== prod.id));
          }}
          className='remove bg-gray-300 py-1 rounded-md font-bold text-white hover:text-violet-400'>Remove from Cart
        </button>
      ) : (
        <button
        onClick={() => {
          setCart([...cart, prod]);
        }}
        className='add bg-gray-300 py-1 mb-2 rounded-md font-bold text-white hover:text-violet-400 '>Add to Cart
      </button>
      )}
      

    </div>
  )
}

export default SingleProduct