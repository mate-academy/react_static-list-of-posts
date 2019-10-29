import React from 'react';
import { List } from 'semantic-ui-react';

function User( {user} ) {
  return (
    <div className="user">
      <List>
        <List.Item icon="users" content={<p>{user.name}</p>} />
        <List.Item icon="mail"
          content={<a href={`mailto:${user.email}`}>{user.email}</a>} />
        <List.Item icon="linkify"
          content={<p>{user.website}</p>} />
        <List.Item icon="marker"
          content={<p>{user.address.city} {user.address.street}</p>} />
      </List>
    </div>
  );
}

export default User;
