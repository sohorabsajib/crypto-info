import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md: justify-between'>
            <div className='hidden md:block'>
                <NavLink to='/' className='font-sans font-bold text-lg text-grey-600'>
                    Crypto Info
                </NavLink>
            </div>
            <div className='flex gap-4 text-xl '>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#0891B2" : "black" })}>Home</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? "#0891B2" : "black" })} to='/coins'>Coins</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? "#0891B2" : "black" })}  to='/contact'>Contact</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? "#0891B2" : "black" })} to='/about'>About</NavLink>

            </div>

        </div>
    );
};

export default Header;