import React from 'react';
import { Form } from './Form/Form';

export const Registration = () => (
  <section className="registration section" id="registration">
    <h1 className="registration__title">Register to get a work</h1>
    <p className="registration__attention">
      Attention! After successful registration and alert,
      update the list of users in the block from the top
    </p>
    <Form />
  </section>
);
