import React, { useState } from 'react';
import { Promo } from './Promo';
import { Info } from './Info';
import { Users } from './Users';
import { Registration } from './Registration';
import { Context } from '../../context';

export const Content = () => {
  const [resetUsers, setResetUsers] = useState(false);
  const handleResetUsers = value => setResetUsers(value);

  return (
    <>
      <Promo />
      <Info />
      <Context.Provider
        value={{
          handleResetUsers,
          resetUsers,
        }}
      >
        <Users />
        <Registration />
      </Context.Provider>
      <footer className="footer">
        © abz.agency specially for the test task
      </footer>
    </>
  );
};
