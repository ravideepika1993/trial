//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from'./inc/Navbar';
//import Home from './Pages/Home';
//import About from './Pages/About';
//import ContactUs from './Pages/ContactUs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//import FormValidation from './FormValidation';
//import Reactbootnav from './Reactbootnav';
import Reactbootnav from './Components/Reactbootnav';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import ProductDetail from './Components/ProductDetail';
import { useState } from 'react';
import CartPage from './Components/CartPage';





function App() {

  const[selectpro]=useState(true)
  return (
    
  
    <Router>
<Reactbootnav/>



<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/productScreen/:id' element={<ProductDetail/>}/>
  <Route path='/cart' element={<CartPage/>}/>
  <Route path='/contact' element={<Contact/>}/>
  
  
  
</Routes>
</Router>
 

      
      
    
);
}

export default App;
