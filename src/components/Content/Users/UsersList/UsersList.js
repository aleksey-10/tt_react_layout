import React, { useState, useEffect, useContext } from 'react';
import { api } from '../../../../api/api';
import { User } from '../User/User';
import { photoCover } from '../../../../assets/images/photo-cover.png';
import { ShowMore } from '../ShowMore';
import { Context } from '../../../../context';

export const UsersList = (props) => {
  const [page, setPages] = useState(1);
  const count = 6;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couldBeFetched, setCouldBeFetched] = useState(true);

  const { resetUsers, handleResetUsers } = useContext(Context);

  const getUsers = () => {
    api.getUsers(page, count)
      .then((data) => {
        const { links } = data;

        setIsLoading(false);
        setUsers(prev => (page !== 1
          ? [
            ...prev,
            ...data.users,
          ]
          : data.users));
        setCouldBeFetched(!!links.next_url);
      });

    handleResetUsers(false);
  };

  useEffect(getUsers, [page]);

  const loadMore = () => {
    setIsLoading(true);
    setPages(page + 1);
  };

  if (resetUsers && page !== 1) {
    setIsLoading(true);
    setPages(1);
  }

  return (
    <>
      <ul className="users__list">
        {
          users.map(user => (
            <User
              key={user.id}
              photo={user.photo || photoCover}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
              id={user.id}
            />
          ))
        }
      </ul>
      {
        couldBeFetched && (
          <ShowMore
            handleClick={loadMore}
            isLoading={isLoading}
          />
        )
      }
    </>
  );
};
