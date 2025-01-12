import { UsePrice } from '@/context/PriceContext'
import React from 'react'



const Navbar = () => {
  const { price, setPrice} = UsePrice();

  console.log(price)
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <h1>User Balance: {price}$</h1>
      </div>
    </div>
  )
}

export default Navbar
