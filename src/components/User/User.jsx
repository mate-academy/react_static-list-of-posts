import React from 'react';

function User({name, mail, address}) {
  return (
    <>
      <p>
        {name}
      </p>

      <p>
        {mail}
      </p>

      <p>
        {address.city}
        {address.suite}
        {address.street}
      </p>
    </>
  )
}

export default User;
