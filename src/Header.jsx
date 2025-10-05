import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo.png'

function Header() {
  const marqueeWords = [
    'Sehat Veda',
    'No Side Effect',
    'Power of 16 Herbs',
    'Fast Delivery',
    '100% Ayurvedic',
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % marqueeWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
      <header className="w-full shadow-sm border-b border-gray-200">
        
        <div className="bg-[#03441f] text-white overflow-hidden h-[36px] text-sm flex items-center justify-center">
          <div className="h-full">
            <div
              className="transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${index * 36}px)` }}
            >
              {marqueeWords.map((word, i) => (
                <div
                  key={i}
                  className="h-[36px] flex items-center justify-center px-4 font-medium"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="flex items-center justify-between px-4 md:px-10 py-3 bg-[#F6FBF4] relative">

          <NavLink to='/'>
           <img src={Logo} alt=""className="text-2xl font-bold w-40 text-green-600 tracking-wide" />
         </NavLink>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
           
            <NavLink to='/' className="text-[#03441f] hover:text-green-600">Home</NavLink>
            <NavLink to='/About' className="text-[#03441f] hover:text-green-600">About</NavLink>
            <NavLink to='/Products' className="text-[#03441f] hover:text-green-600">Products</NavLink>
             <NavLink to='/Reviews' className="text-[#03441f] hover:text-green-600">Reviews</NavLink>
            <NavLink to='/Contact' className="text-[#03441f] hover:text-green-600">Contact</NavLink>
          </nav>

          
          <div className="md:hidden text-2xl  text-[#03441f]">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div className="md:hidden bg-[#F6FBF4]  px-4 py-2 shadow-inner text-gray-700 font-medium space-y-2">
            <NavLink to='/' className="text-[#03441f] block hover:text-green-600">Home</NavLink>
            <NavLink to='/About' className="text-[#03441f] block hover:text-green-600">About</NavLink>
            <NavLink to='/Products' className="text-[#03441f] block hover:text-green-600">Products</NavLink>
            <NavLink to='/Reviews' className="text-[#03441f] block hover:text-green-600">Reviews</NavLink>
            <NavLink to='/Contact' className="text-[#03441f] block hover:text-green-600">Contact</NavLink>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
