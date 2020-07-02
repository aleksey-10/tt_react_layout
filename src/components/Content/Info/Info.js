import React from 'react';
import manLaptop from '../../../assets/images/man-laptop-v1.svg';

export const Info = () => (
  <section className="info section" id="about">
    <h1 className="info__title">Let's get acquainted</h1>
    <div className="info__content container">
      <img
        src={manLaptop}
        alt="Man laptop"
        className="info__img"
      />
      <div className="info__description">
        <h2 className="info__subtitle">
          I am cool frontend developer
        </h2>
        <p className="info__paragraph">
          We will evaluate how clean your approach to writing CSS
          and Javascript code is. You can use any CSS and Javascript
          3rd party libraries without any restriction.
        </p>
        <p className="info__paragraph">
          If 3rd party css/javascript libraries are added to the project
          via bower/npm/yarn you will get bonus points.
          If you use any task runner (gulp/webpack) you will
          get bonus points as well. Slice service directory page P​SD
          mockup​ into HTML5/CSS3.
        </p>
        <a
          className="info__button flat-button"
          href="#registration"
        >
          Sign up now
        </a>
      </div>
    </div>
  </section >
);
