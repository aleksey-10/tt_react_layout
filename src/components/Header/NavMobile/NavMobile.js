import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.svg';

export const NavMobile = () => {
  const [isActive, setIsActive] = useState(false);

  document.addEventListener('click', function hide(event) {
    if (isActive && (event.target.dataset.area === 'lining'
      || event.target.classList.contains('nav-mobile__link'))) {
      setIsActive(false);
    }

    document.removeEventListener('click', hide);
  });

  return (
    <nav className="header-custom__nav-mobile nav-mobile">
      <button
        className="nav-mobile__burger"
        type="button"
        onClick={() => setIsActive(true)}
      />
      <Menu isActive={isActive} />
    </nav>
  );
};

const Menu = ({ isActive }) => (
  <div
    className={
      `nav-mobile__lining ${isActive && 'nav-mobile__lining--active'}`
    }
    data-area="lining"
  >
    <div
      className={
        `nav-mobile__menu ${isActive && 'nav-mobile__menu--active'}`
      }
    >
      <div className="nav-mobile__logo container">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-mobile__list container">
        <li>
          <a href="#about" className="nav-mobile__link">About me</a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Relationship</a>
        </li>
        <li>
          <a href="#users" className="nav-mobile__link">Users</a>
        </li>
        <li>
          <a href="#registration" className="nav-mobile__link">Sign up</a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Terms and Conditions</a>
        </li>
      </ul>
      <hr />
      <ul className="nav-mobile__list container">
        <li>
          <a href="#about" className="nav-mobile__link">How it works</a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Partnership</a>
        </li>
        <li>
          <a href="#users" className="nav-mobile__link">Help</a>
        </li>
        <li>
          <a href="#registration" className="nav-mobile__link">
            Leave Testimonial
          </a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Terms and Conditions</a>
        </li>
      </ul>
      <hr />
      <ul className="nav-mobile__list container">
        <li>
          <a href="#about" className="nav-mobile__link">Articles</a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Our news</a>
        </li>
        <li>
          <a href="#users" className="nav-mobile__link">Testimonials</a>
        </li>
        <li>
          <a href="#registration" className="nav-mobile__link">Licenses</a>
        </li>
        <li>
          <a href="#home" className="nav-mobile__link">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </div>
);

Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
