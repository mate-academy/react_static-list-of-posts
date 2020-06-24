import React from 'react';
import './User.css';
import users from '../../../api/users';

export const User = (ID) => {
  let usr = {};

  users.forEach((unit) => {
    if (unit.id === ID.userId) {
      usr = unit;
    }
  });

  return (
    <div className="User" key={usr.id}>
      <b>
        {usr.name}
        &nbsp;
      </b>
      <small className="User__mail">{usr.email}</small>
      <div className="User__address">
        <p>
          {usr.address.city}
        </p>
        <p>
          {usr.address.street}
          &nbsp;
          {usr.address.suite}
        </p>
        <p>
          {usr.address.zipcode}
        </p>
      </div>
    </div>
  );
};
