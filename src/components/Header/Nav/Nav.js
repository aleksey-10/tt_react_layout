import React from 'react';
import PropTypes from 'prop-types';

export const Nav = () => (
  <nav className="header__nav nav">
    <ul className="nav__list">
      <NavItem title="About me" link="#about" />
      <NavItem title="Relationship" link="#home" />
      <NavItem
        title="Requirements"
        link="#home"
        isActive={true}
      />
      <NavItem title="Users" link="#users" />
      <NavItem title="Sign Up" link="#registration" />
    </ul>
  </nav>
);

const NavItem = ({ title, link, isActive }) => (
  <li className="nav__item">
    <a
      className={`nav__link ${isActive && 'nav__link--active'}`}
      href={link}
    >
      {title}
    </a>
  </li>
);

NavItem.defaultProps = {
  isActive: false,
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
