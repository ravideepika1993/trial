import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cart = () => {
  // we get a state of addItems
  //write the name of file not the function

    const state=useSelector((state)=>state.addItem)
 


  return (
    <div>
        <NavLink to='/cart' className="btn btn-outline-primary w-100">Cart({state.length})</NavLink>
    </div>
  )
}

export default Cart