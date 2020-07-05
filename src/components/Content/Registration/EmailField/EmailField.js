/* eslint-disable no-control-regex */
import React from 'react';
import PropTypes from 'prop-types';

export const EmailField = ({ register, error }) => (
  <div className="form__item">
    <label className="form__label" htmlFor="fieldEmail">Email</label>
    <input
      className={`form__input${error ? ' form__input--invalid' : ''}`}
      type="email"
      name="email"
      id="fieldEmail"
      placeholder="Your email"
      ref={register({
        required: true,
        // eslint-disable-next-line max-len
        pattern: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      })}
    />
    {
      error && error.type === 'required'
      && <small className="form__error">This field is required</small>
    }
    {
      error && error.type === 'pattern'
      && (
        <small className="form__error">
          Email should contains @ and valid domain
        </small>
      )
    }
  </div>
);

EmailField.defaultProps = {
  error: null,
};

EmailField.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  register: PropTypes.func.isRequired,
};
