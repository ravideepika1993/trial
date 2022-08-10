import React from 'react'
import './Products.css'
import Data from './Data.json';
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';




const Product = () => {
  const carditem=(item)=>{
    return(
      <Card  className='card mb-5 px-4 mx-3 mt-5' key={item.id}style={{width:'18rem'}}>
        <Card.Img variant='top' src={item.img} className='img'/>
        <Card.Body className='text-center'>
          <Card.Title className='title'>{item.title}</Card.Title>
          <Card.Text>
          <p className='price'>${item.price}</p>
           
          </Card.Text>
          
          <Link to ={`/productScreen/${item.id}`}>Buy Now</Link>
          
        </Card.Body>

      </Card>

    );
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h className='prod'>PRODUCTS</h>
            <hr/>
            </div>
        </div>

      </div>
      <div className='container'>
        <div className='row'>
          {Data.map(carditem)}
        </div>
      </div>


    </div>
  )
}

export default Product