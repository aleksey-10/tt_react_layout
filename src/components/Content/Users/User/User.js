import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const User = memo(
  ({ photo, name, position, email, id, phone }) => (
    <li className="users__item user">
      <img
        src={photo}
        alt={name}
        className="user__photo"
      />
      <h2 className="user__name">{name}</h2>
      <span className="user__position">{position}</span>
      <OverlayTrigger
        overlay={<Tooltip id={`tooltip-${email}${id}`}>{email}</Tooltip>}
      >
        <span className="user__email">{email}</span>
      </OverlayTrigger>
      <span className="user__phone">{phone}</span>
    </li>
  ),
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
