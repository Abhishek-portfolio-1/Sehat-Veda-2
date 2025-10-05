
import './App.css'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ReviewSlider from './Review';
import Contact from './Contact';

import Header from './Header'

function App() {
  

  return (
    <>
   
    
    <Router>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Reviews' element={<ReviewSlider/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
