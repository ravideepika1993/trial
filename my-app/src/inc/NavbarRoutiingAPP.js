//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'./inc/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//import FormValidation from './FormValidation';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  
    


      
      
    
);
}

export default App;
