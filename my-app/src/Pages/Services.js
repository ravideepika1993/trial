import React from 'react'
import services1 from '../images/services1.jpg';
import './Services.css';
import {Link} from 'react-router-dom';


const Services = () => {
  return (
    <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center py-5'>
                        <h className='head-services'>Our Services</h>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 py-3'>
                        <div className='card shadow'>
                            <img src={services1} className="w-100 border-bottom" />
                            <div className='card body'>
                                <h className='serve'>Services</h>
                                <p className='serve-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                             <Link to="/about" className='nav-act'>Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 py-3'>
                        <div className='card shadow'>
                            <img src={services1} className="w-100 border-bottom" />
                            <div className='card body'>
                                <h className='serve'>Services</h>
                                <p className='serve-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Link to="/about" className='nav-act'>Read More</Link>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className='card shadow'>
                            <img src={services1} className="w-100 border-bottom" />
                            <div className='card body'>
                                <h className='serve'>Services</h>
                                <p className='serve-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Link to="/about" className='nav-act'>Read More</Link>

                            </div>
                        </div>
                    </div>

 </div>
                

            </div>
        </section>
    </div>
  )
}

export default Services