import React from 'react';
import PropTypes from 'prop-types';

export const PhotoField = ({ register, error }) => (
  <div className="form__item">
    <label className="form__label" htmlFor="fieldPhoto">Photo</label>
    <input
      className={`form__input${error ? ' form__input--invalid' : ''}`}
      type="file"
      name="photo"
      id="fieldPhoto"
      placeholder="Your name"
      ref={register({ required: true })}
    />
    {
      error && error.type === 'required'
      && <small className="form__error">This field is required</small>
    }
  </div>
);

PhotoField.defaultProps = {
  error: null,
};

PhotoField.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  register: PropTypes.func.isRequired,
};
