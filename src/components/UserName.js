import React from 'react';

function UserName({user}) {
  // console.log(user)
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>city: {user.address.city}, street: {user.address.street}</p>
      <hr style={{width: '80%'}} />
    </div>
  )
}

export default UserName;
