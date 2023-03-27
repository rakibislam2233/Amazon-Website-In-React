import React from 'react';

const NavBar = () => {
    return (
        <>
        <nav className='bg-[#1C2B35] z-50 md:h-20 fixed top-0 right-0 left-0 '>
            <div className='w-full max-w-6xl md:h-20 mx-auto md:flex justify-between items-center p-5'>
                <img src="Logo.svg" alt="logo.svg" />
                <ul  className='text-white flex justify-center item-center gap-5 hove:text-rose-400'>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default NavBar;