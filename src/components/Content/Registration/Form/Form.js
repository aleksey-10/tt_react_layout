import React from 'react';
import { useForm } from 'react-hook-form';
import { NameField } from '../NameField';
import { EmailField } from '../EmailField';
import { PhoneField } from '../PhoneField';
import { PositionField } from '../PositionField/PositionField';
import { PhotoField } from '../PhotoField/PhotoField';

export const Form = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="registration__form form" onSubmit={handleSubmit(onSubmit)}>
      <NameField register={register} error={errors.name} />
      <EmailField register={register} error={errors.email} />
      <PhoneField register={register} error={errors.phone} />
      <PositionField register={register} error={errors} />
      <PhotoField register={register} error={errors.photo} />
      <button type="submit" className="form__button button">Sign up now</button>
    </form>
  );
};
