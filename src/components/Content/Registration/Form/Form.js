import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NameField } from '../NameField';
import { EmailField } from '../EmailField';
import { PhoneField } from '../PhoneField';
import { PositionField } from '../PositionField/PositionField';
import { PhotoField } from '../PhotoField/PhotoField';
import { api } from '../../../../api/api';
import { Context } from '../../../../context';

export const Form = () => {
  const { handleResetUsers } = useContext(Context);

  const {
    register,
    errors,
    formState,
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('position_id', data.position_id);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('photo', data.photo[0]);

    api.sendUserData(formData);

    reset();
    handleResetUsers(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <form
        className="registration__form form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameField register={register} error={errors.name} />
        <EmailField register={register} error={errors.email} />
        <PhoneField register={register} error={errors.phone} />
        <PositionField register={register} error={errors} />
        <PhotoField register={register} error={errors.photo} />
        <button
          type="submit"
          className="form__button button"
          onClick={handleShow}
          disabled={!formState.isValid}
        >
          Sign up now
        </button>
      </form>
      <ModalWindow show={show} handleClose={handleClose} />
    </>
  );
};

const ModalWindow = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Congratulates</Modal.Title>
    </Modal.Header>
    <Modal.Body>You have successfully passed the registration</Modal.Body>
    <Modal.Footer>
      <button
        className="button"
        type="button"
        onClick={handleClose}
      >
        Great
      </button>
    </Modal.Footer>
  </Modal>
);

ModalWindow.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
