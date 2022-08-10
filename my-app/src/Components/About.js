import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center py-4'>
            <h style={{'fontSize':'28px'}}>ABOUT</h>
            <hr/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <h className='head' style={{'fontSize':'28px'}}>
              ABOUT US
            </h>
            <p className='my-4'style={{'fontSize':'20px'}}>
            <span style={{'color':'red'}}>Kritanya Electronics </span> shop be is a Belgian IT online retailer, specialized in laptops and notebooks from brands like Acer Aspire, HP Pavilion, Packard Bell and desktop computers. Kritanya Electronics Shop be was founded in 2005 and apart from online sales, clients can also come to our shop located in Aalst, Belgium.

            </p>
          </div>
          <div className='col-md-6'>
            <h style={{'fontSize':'20px'}}>Further information click on this link</h>
            <Link to='/contact'>Contact us</Link>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default About