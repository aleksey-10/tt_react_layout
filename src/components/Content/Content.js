import React from 'react';
import { Promo } from './Promo';
import { Info } from './Info';
import { Users } from './Users';
import { Registration } from './Registration';

export const Content = () => (
  <>
    <Promo />
    <Info />
    <Users />
    <Registration />
    <footer className="footer">
      © abz.agency specially for the test task
    </footer>
  </>
);
