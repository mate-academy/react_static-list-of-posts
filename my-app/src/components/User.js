import React from 'react';
import {users} from '../users';

function User(props) {
  const userInfo = users.find(user => user.id === props.userId)
  return (
    <section>
      <h2>{userInfo.name}</h2>
      <a href={userInfo.email}>{userInfo.email}</a>
    </section>
  )
}


export default User;
