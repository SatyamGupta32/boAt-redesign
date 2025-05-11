import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartTab from '../Cart-tab/cartTab';
import './Layout.css';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className="layout-container">
      <main className={`layout-main ${statusTabCart ? 'layout-shifted' : ''}`}>
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
