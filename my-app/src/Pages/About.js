import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <div>
        <div className='container-fluid py-4 bg-primary'>
          <h>ABOUT</h>
          </div>
          
          
          <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center '>
              <h className="heading">Our Company</h>
              <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
</div>
</div>

          
        </div>
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

      



export default About