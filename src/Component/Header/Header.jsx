import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';

const Header = () => {
    return (
        <>
        <NavBar></NavBar>
        <HeroArea></HeroArea>
        <Shop></Shop>
        </>
    );
};

export default Header;