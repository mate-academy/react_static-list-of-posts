import React from 'react';

function User({ email, name, address }) {
  return (
    <div>
      <h4>Author: {name}</h4>
      <p>Email: {email}</p>
      <p>Adress: {address.street}, {address.suite},
        {address.city}, {address.zipcode}
      </p>
    </div>
  );
}

export default User;
