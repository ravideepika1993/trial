import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <section>
            <div className='container-fluid bg-dark text-white'>
                <div className='row'>
                    <div className='col-md-4 py-5 text-center'>
                        <h className="f-head">Company Information</h>
                        <div><p className='para-f'>Zauba Corp is India's leading provider of commercial information and insight on businesses. The team behind Zauba Corp have one goal - to be your sole resource for critical information. We gather data from a number of official sources and third parties to give you all the information you need, in one easy to use website.

                      </p></div>

                    </div>
                    <div className='col-md-4 py-5 text-center'>
                        <h className="f-head">
                            Quick Links
                        </h>
                        <div>
                            <br/>
                        <Link to='/' className='f-link'>Home</Link> </div><br/>
                       <div><Link to='/about'className='f-link'>About</Link></div><br/>
                        <div><Link to='/contact' className='f-link'>ContactUs</Link></div>
                        
                    </div>
                    <div className='col-md-4 py-5 text-center'>
                        <h className="f-head">Contact Information</h>
                        <div><p className='para-f1'>#64,Bangalore,electronic city</p></div>
                        <div><p className='para-f1'>+91 87xxxxxxx</p></div>
                        <div><p className='para-f1'>+91 78xxxxxxx</p></div>
                        <div><p className='para-f1'>email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer