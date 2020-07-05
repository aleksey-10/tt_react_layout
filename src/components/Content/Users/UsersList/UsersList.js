import React, { useState, useEffect } from 'react';
import { api } from '../../../../api/api';
import { User } from '../User/User';
import { photoCover } from '../../../../assets/images/photo-cover.png';
import { ShowMore } from '../ShowMore';

export const UsersList = (props) => {
  const [page, setPages] = useState(1);
  const count = 6;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couldBeFetched, setCouldBeFetched] = useState(true);

  const getUsers = () => {
    api.getUsers(page + 1, count)
      .then((data) => {
        const { links } = data;

        setIsLoading(false);
        setUsers(prev => [
          ...prev,
          ...data.users,
        ]);
        setPages(page + 1);
        setCouldBeFetched(!!links.next_url);
      });
  };

  useEffect(getUsers, []);

  const loadMore = () => {
    setIsLoading(true);
    getUsers();
  };

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
