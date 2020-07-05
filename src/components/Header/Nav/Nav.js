import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, BrowserRouter } from 'react-router-dom';

export const Nav = () => (
  <nav className="header-custom__nav nav">
    <ul className="nav__list">
      <BrowserRouter>
        <NavItemWithRouter title="About me" link="about" />
        <NavItemWithRouter title="Relationship" link="home" />
        <NavItemWithRouter title="Requirements" link="requirements" />
        <NavItemWithRouter title="Users" link="users" />
        <NavItemWithRouter title="Sign Up" link="registration" />
      </BrowserRouter>
    </ul>
  </nav>
);

const NavItem = (props) => {
  const { title, link } = props;
  const isActive = `#${link}` === props.location.hash;

  return (
    <li className="nav__item">
      <a
        className={`nav__link ${isActive && 'nav__link--active'}`}
        href={`#${link}`}
      >
        {title}
      </a>
    </li>
  );
};

const NavItemWithRouter = withRouter(NavItem);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.shape({ hash: PropTypes.string }).isRequired,
};
