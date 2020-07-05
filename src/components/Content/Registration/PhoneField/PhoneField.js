import React from 'react';
import PropTypes from 'prop-types';

export const PhoneField = ({ register, error }) => (
  <div className="form__item">
    <label className="form__label" htmlFor="fieldPhone">Phone number</label>
    <input
      className={`form__input${error ? ' form__input--invalid' : ''}`}
      type="tel"
      name="phone"
      id="fieldPhone"
      placeholder="+380 XX XXX XX XX"
      ref={register({
        required: true,
        pattern: /^[+]{0,1}380([0-9]{9})$/,
      })}
    />
    <small className="form__prompt">Enter phone number in open format</small>
    {
      error && error.type === 'required'
      && <small className="form__error">This field is required</small>
    }
    {
      error && error.type === 'pattern'
      && (
        <small className="form__error">
          Phone number should has correct format
        </small>
      )
    }
  </div>
);

PhoneField.defaultProps = {
  error: null,
};

PhoneField.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  register: PropTypes.func.isRequired,
};
