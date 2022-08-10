import React from 'react'
import ContactForm from './ContactForm'
import ContactValidate from './ContactValidate';
import { useState } from 'react'

const ContactUs = () => {
  const{handleChange,values,errors,handleSubmit,Data}=ContactForm(ContactValidate);
  

  return (
      <div>
        <section>
          <div className='container-fluid bg-primary py-4'>
            <div className='row'>
              <div className='col-md-4'>
                <h>ContactUs</h>

              </div>
              <div className='col-md-8'>
                <h className='float-end'>
                  Home/Contact Us
                </h>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='card shadow'>
                <div className='card body'>
                  <div className='col-md-6'>
                    <form className='form-group' onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label className='f-name' htmlFor='firstname' >First Name</label>
                      <input type="text" id="firstname" name="firstname" value={values.firstname}placeholder="first name"className='form-control' onChange={handleChange}/>
                      {errors.firstname &&<p>{errors.firstname}</p>}
                    </div>
                    <div className='form-group'>
                      <label className='ph-no' htmlFor='ph'>phone number</label>
                      <input type="text" id="ph"  name="ph" value={values.ph} placeholder='phone number' className='form-control' onChange={handleChange}/>
                      {errors.ph &&<p>{errors.ph}</p>}

                    </div>
                    <div className='form-group'>
                      <label className='email-id' htmlFor='email'>Email Address</label>
                      <input type="text" id="email" name="email" value={values.email} placeholder="email address"className='form-control' onChange={handleChange}/>
                      {errors.email &&<p>{errors.email}</p>}

                    </div>
                    <div className='form-group'>
                      <label className='msg' htmlFor='msg'>Message</label>
                      <input type="text" id="msg" name="msg" value={values.msg} placeholder='type your message' className='form-control' onChange={handleChange}/>
                      {errors.msg &&<p>{errors.msg}</p>}

                    </div>
                    <div>
                      <input type="submit" value="submit"  />
                    </div>
                    
                    </form>




                  </div>
                  <div className='col-md-6'>
                    <table>
                      <tr>
                        <th>firstname</th>
                        <th>ph</th>
                        <th>email</th>
                      </tr>
                      {Data.map((dat)=>
                      <tr>
                        <td>{dat.firstname}</td>
                        <td>{dat.ph}</td>
                        <td>{dat.email}</td>

                      </tr>
      
                      )}
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default ContactUs