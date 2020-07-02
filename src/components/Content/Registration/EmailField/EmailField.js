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
        pattern: /\w+@\w+\.\w+/,
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
