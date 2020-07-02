import React from 'react';

export const Promo = () => (
  <section className="promo container">
    <h1 className="promo__title">
      <div>Test assignment</div>
      <div>for Frontend</div>
      <div>Developer position</div>
    </h1>
    <p className="promo__description">
      We kindly remind you that your test assignment
      should be submitted as a link to github/bitbucket repository.
      Please be patient, we consider and respond to every application
      that meets minimum requirements. We look forward to your submission.
      Good luck! The photo has to scale in the banner area on the
      different screens
    </p>
    <p className="promo__short-description">
      We kindly remind you that your test assignment
      should be submitted as a link to github/bitbucket repository.
    </p>
    <a className="promo__button button" href="#registration">
      Sign up now
    </a>
  </section>
);
