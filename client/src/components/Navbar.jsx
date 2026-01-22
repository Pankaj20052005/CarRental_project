import React, { useState } from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24
        xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
        ${location.pathname === "/" ? "bg-light" : ""}`}>

            {/* Logo Section */}
            <Link to='/'>
                {/* Fixed: Use curly braces for the variable, not quotes */}
                <img src={assets.logo} alt='logo' className='h-8' />
            </Link>

            {/* Menu Links Section */}
            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16
            max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row
            items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all
            duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} 
            ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
                
                {/* Fixed: Changed parameter name from 'Link' to 'item' to avoid conflict */}
                {menuLinks.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path} 
                        onClick={() => setOpen(false)} // Optional: close menu on click
                    >
                        {item.name}
                    </Link>
                ))}

                <div className='hidden lg:flex items-center text-sm gap-2 border
                border-borderColor px-3 rounded-full max-w-56 '>
                    <input type='text' className='py-1.5 w-full bg-transparent
                    outline-none placeholder-gray-500' placeholder='Search Products'/>
                    <img src={assets.search_icon} alt='search' />
                </div>

                <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
                    <button onClick={()=> navigate('/owner')}
                     className='cursor-pointer'>DashBoard</button>
                    <button onClick={()=> setShowLogin(true)} 
                    className='cursor-pointer px-8 py-2 bg-primary
                    hower:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
                </div>
            </div>
            
            {/* Mobile Toggle Button (You likely need this to toggle 'open' state) */}
            <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
                <img src={open ? assets.close_icon : assets.menu_icon} alt="Menu" />
            </button>
        </div>
    );
}

export default Navbar;