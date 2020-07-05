import React from 'react';
import { Promo } from './Promo';
import { Info } from './Info';
import { Users } from './Users';
import { Registration } from './Registration';
import { Context } from '../../context';

export const Content = () => (
  <>
    <Promo />
    <Info />
    <Context.Provider>
      <Users />
      <Registration />
    </Context.Provider>
    <footer className="footer">
      © abz.agency specially for the test task
    </footer>
  </>
);
