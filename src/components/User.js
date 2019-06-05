import React from 'react'
import { users } from '../resources/users';

const userMap = {}
users.forEach(item => {
  userMap[item.id] = item;
})

function User(props) {

  return (
   <a href={`mailto:${userMap[props.id].email}`}>{userMap[props.id].name}</a>
 )
}

export default User;
