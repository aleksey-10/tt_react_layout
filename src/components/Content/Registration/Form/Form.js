import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NameField } from '../NameField';
import { EmailField } from '../EmailField';
import { PhoneField } from '../PhoneField';
import { PositionField } from '../PositionField/PositionField';
import { PhotoField } from '../PhotoField/PhotoField';
import { api } from '../../../../api/api';

export const Form = () => {
  const { isValid, setIsValid } = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('position_id', data.position_id);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('photo', data.photo[0]);

    setIsValid(true);

    // api.sendUserData(formData);
  };

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
          data-toggle={isValid && 'modal'}
          data-target="#exampleModal"
        >
          Sign up now
        </button>
      </form>
      <Modal />
    </>
  );
};

const Modal = () => (
  <div
    className="modal"
    tabIndex="-1"
    role="dialog"
    id="exampleModal"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Congratulates</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>You have successfully passed the registration</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="button"
            data-dismiss="modal"
          >
            Great
          </button>
        </div>
      </div>
    </div>
  </div>
);
