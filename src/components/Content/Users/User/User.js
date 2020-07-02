import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const User = memo(
  props => (
    <li className="users__item user">
      <img
        src={props.photo}
        alt={props.name}
        className="user__photo"
      />
      <h2 className="user__name">{props.name}</h2>
      <span className="user__position">{props.position}</span>
      <span className="user__email">{props.email}</span>
      <span className="user__phone">{props.phone}</span>
    </li>
  )
);


User.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
