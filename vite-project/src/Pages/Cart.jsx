import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Item from '../Components/Item'
import { StoreContext } from '../Context/StoreContext'

export default function Cart() {

  const { cartItems, totalPrice } = useContext(StoreContext)

  useEffect(() => {

  }, [totalPrice])

  return (
    <>

      <div className='Cart-Container'>
        <h2>Your Cart : {totalPrice} $</h2>
        <div className='Header'>
          <h3 className='Heading'>Shopping Cart</h3>
        </div >
        <div className='grid'>
          {
            cartItems.length > 0 ?
              cartItems.map((item, i) => <Item key={i} {...item} inCart={true} />)
              :
              <h2 className='empty'>Empty</h2> 
              
          }
        </div>
        {
          cartItems.length > 0 ? 
          <button style={{color:'white',fontSize:'22px',backgroundColor:'orange'}} >Checkout</button> 
          :
          <button style={{color:'white',fontSize:'22px'}} >Checkout</button>
        }
     
      </div>
     
    </>
  )
}
