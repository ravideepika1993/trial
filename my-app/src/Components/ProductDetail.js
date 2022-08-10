import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetail.css'


import Data from './Data.json'
import { useDispatch} from 'react-redux';
import { addItem,delItem } from '../redux/actions/index';



const ProductDetail = ({props}) => {
  
  const[cartbtn,setCartbtn]=useState("Add to Cart")
      
  

    const proid=useParams();
    const proDetail=Data.filter(x=>x.id==proid.id)
    const item= proDetail[0];
    console.log(item)

    //we need to store useDispatch in a variable

   const dispatch=useDispatch()

    const handleCart=(item)=>{
        if(cartbtn==="Add to Cart"){
           
         dispatch(addItem(item))   
            
            setCartbtn("Remove from Cart")

        }
        else{
            dispatch(delItem(item))
    
            setCartbtn("Add to Cart")
        }
    }



  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto'>
                    <img src={item.img} alt='/' height='300px' className='mt-5' />
                </div>
                <div className='col-md-6'>
                    <h1 className='display-5 my-4 fw-bold'>{item.title}</h1>
                    <hr/>
                    <h2 className='my-3'>${item.price}</h2>
                    <p className='decs-p'>{item.desc}</p>
                    
                    <button onClick={()=>handleCart(item)} className='btn btn-outline-primary my-5 w-100'>{cartbtn}</button>
 
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetail