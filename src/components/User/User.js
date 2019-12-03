import React from 'react';

const User = ({email, name, address}) => (
  <div>
    <h4>Author: {name}</h4>
    <p>Email: {email}</p>
    <p>Address: {address.street}, {address.suite},
      {address.city}, {address.zipcode}
    </p>
  </div>
);

export default User;
