import React, { Component } from 'react';
import { api } from '../../../../api/api';
import { User } from '../User/User';
import { photoCover } from '../../../../assets/images/photo-cover.png';
import { ShowMore } from '../ShowMore';

export class UsersList extends Component {
  state = {
    page: 1,
    count: 6,
    users: [],
    isLoading: true,
    couldBeFetched: true,
  }

  #getUsers = () => {
    api.getUsers(this.state.page + 1, this.state.count)
      .then(data => {
        const { users, links } = data;

        this.setState(prevState => ({
          isLoading: false,
          users: [
            ...prevState.users,
            ...users,
          ],
          page: prevState.page + 1,
          couldBeFetched: !!links.next_url,
        }));
      });
  }

  componentDidMount() {
    this.#getUsers();
  }

  loadMore = () => {
    this.setState({ isLoading: true });
    this.#getUsers();
  }

  render() {
    return (
      <>
        <ul className="users__list">
          {
            this.state.users.map(user => (
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
          this.state.couldBeFetched && (
            <ShowMore
              handleClick={this.loadMore}
              isLoading={this.state.isLoading}
            />
          )
        }
      </>
    );
  }
}
