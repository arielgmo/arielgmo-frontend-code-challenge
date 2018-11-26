import React from 'react';
import logoImg from '../../references/assets/logo.png';
import './HeaderMenu.css';

const HeaderMenu = () => (
  <div className="menu-container">
    <div className="logo-container">
      <img src={logoImg} alt="logo" />
    </div>
  </div>
);

export default HeaderMenu;
