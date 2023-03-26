import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const RootLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default RootLayout;