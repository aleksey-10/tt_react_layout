import React from 'react';
import PropTypes from 'prop-types';

export const NameField = ({ register, error }) => (
  <div className="form__item">
    <label className="form__label" htmlFor="fieldName">Name</label>
    <input
      className={`form__input${error ? ' form__input--invalid' : ''}`}
      type="text"
      name="name"
      id="fieldName"
      placeholder="Your name"
      ref={register({
        required: true,
        minLength: 4,
      })}
    />
    {
      error && error.type === 'required'
      && <small className="form__error">This field is required</small>
    }
    {
      error && error.type === 'minLength'
      && <small className="form__error">Min length is 4</small>
    }
  </div>
);

NameField.defaultProps = {
  error: null,
};

NameField.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  register: PropTypes.func.isRequired,
};
