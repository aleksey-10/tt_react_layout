import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Nav } from './Nav';
import { NavMobile } from './NavMobile';

export const Header = () => (
  <header className="header-custom container-custom">
    <img src={logo} alt="logo" />
    <Nav />
    <NavMobile />
  </header>
);
