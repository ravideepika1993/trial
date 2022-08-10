import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <Link to="/" class="navbar-brand">Funda of Web IT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          
          <Link to="about" class="nav-link active">About</Link> 
        </li>
        <li class="nav-item">
          
          <Link to="contact" class="nav-link active">ContactUs</Link> 
        </li>
          </ul>
       
      
      </div>
  </div>
</nav>
  )
}

export default Navbar

