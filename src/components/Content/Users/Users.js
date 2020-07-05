import React from 'react';
import { UsersList } from './UsersList';

export const Users = () => (
  <section className="users section" id="users">
    <h1 className="users__title">Our cheerful users</h1>
    <p className="users__attention">
      Attention! Sorting users by registration date
    </p>
    <div className="users__content container-custom">
      <UsersList />
    </div>
  </section>
);
