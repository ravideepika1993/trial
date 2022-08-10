import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <header className='px-4 bg-light my-4 py-3 fw-bold contact-head'>Contact</header>
      
<div className='container'>
  <div className='row'>
    <div className='col-md-3'>
      <p style={{'color':'green'}}>Kritanya Electronics</p>
      <hr/>
     <p style={{'color':'green'}}> Chintadripet, Chennai, TAMIL NADU, India (IN), Pincode 600002</p>
     <p style={{'color':'green'}}>Contact No: 9944123231</p>
     
     </div>


<div className='col-md-3'>
     <p style={{'color':'blue'}}>Kritanya Electronics</p>
     <hr/>
     <p style={{'color':'blue'}}>Bangalore 442, 2A/2B, Hosur Rd, Bandepalya, Garvebhavi Palya, Bengaluru, Karnataka 560068
</p>
<p style={{'color':'blue'}}>Contact No: 9791525360</p>
    </div>


     <div className='col-md-3'>
     <p style={{'color':'green'}}>Kritanya Electronics</p>
     <hr/>
     <p style={{'color':'green'}}>105, Oppanakara Street, Oppanakara Street, Near Chennai Silks, Town Hall, Coimbatore, Tamil Nadu 641001</p>
     <p style={{'color':'green'}}>Contact No: 9677658525</p>
     </div>
     <div className='col-md-3'>
     <p style={{'color':'blue'}}>Kritanya Electronics</p>
     <hr/>
     <p style={{'color':'blue'}}>2, JC Towers , Karur Bye Pass Road , Trichy - 620018</p>
     <p style={{'color':'blue'}}>Contact No: 9944267575</p>
     </div>

</div>
      </div>
    </div>
  )
}

export default Contact