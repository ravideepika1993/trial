import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {delItem } from "../redux/actions/index";
import './CartPage.css';


const CartPage=()=>{
    const state=useSelector((state)=>state.addItem)
    const dispatch=useDispatch()

    const handleClose=(item)=>{
        dispatch(delItem(item))
    }



   const cartItems=(cartItem)=>{
    return(
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button className="btn-close float-end" aria-label="Close" onClick={()=>handleClose(cartItem)}></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                   <img src={cartItem.img} alt={cartItem.title} height='200px' width='180px' />
                    </div>
                    <div className="col-md-4">
                        <h className="head-cart">{cartItem.title}</h>
                        <p className="para-cart">${cartItem.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
   }

   const emptycart=()=>{
    return(
        <>
        <div className="px-5 my-5 py-5 bg-light rounded-3">
            <div className="row justify-content-center">
                <div className="col">
                    <h1 className="empty-head">Your Cart is Empty !!</h1>
                </div>


            </div>
        </div>
        </>
    )
   }




    return(
        <>
        {state.length ==0 && emptycart()}
        {state.length!==0 && state.map(cartItems)}
        </>
    )
}

export default CartPage;