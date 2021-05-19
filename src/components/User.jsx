import React from 'react';

export const User = ({ name, email, address }) => (
  <>
  <div className="name">
    <h3>{name}:</h3>
    <p>{email}</p>
  </div>
  <p><span className="address">Address:</span> {address.street},
  {' '}
  <span className="address">suite:</span> {address.suite}</p>
  </>
);
