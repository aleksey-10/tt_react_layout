import React from 'react';
import PropTypes from 'prop-types';
import bsCustomFileInput from 'bs-custom-file-input';

bsCustomFileInput.init();

export const PhotoField = ({ register, error }) => (
  <div className="form__item">
    <span className="form__label">Photo</span>
    <div className="custom-file">
      <label
        htmlFor="fieldPhoto"
        className="custom-file-label"
        style={{ color: '#b2b9c0' }}
      >
        Upload your photo
      </label>
      <input
        className="custom-file-input invalid is-valid"
        type="file"
        name="photo"
        id="fieldPhoto"
        ref={register({ required: true })}
        accept="image/jpg,image/jpeg"
      />
    </div>
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
