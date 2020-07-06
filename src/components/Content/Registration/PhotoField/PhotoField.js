import React from 'react';
import PropTypes from 'prop-types';
import bsCustomFileInput from 'bs-custom-file-input';
import { Form } from 'react-bootstrap';

bsCustomFileInput.init();

export const PhotoField = ({ register, error }) => (
  <div className="form__item">
    <span className="form__label">Photo</span>
    <Form.File
      name="photo"
      label="Upload your photo"
      ref={register({
        required: true,
        validate: {
          size: value => value[0].size < 2 ** 10 * 5,
        },
      })}
      accept="image/jpg,image/jpeg"
      custom
      isInvalid={error}
    />
    {
      error && error.type === 'required'
      && <small className="form__error">This field is required</small>
    }
    {
      error && error.type === 'size'
      && <small className="form__error">Max photo size is 5 Mb</small>
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
