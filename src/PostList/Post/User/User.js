import React from 'react';
import { userShape } from '../props';

import './User.css';

export const User = ({ name, email, address, id }) => (
  <div className="user" key={id}>

    <b className="user__name">
      {name}
        &nbsp;
    </b>

    <small className="user__mail">{email}</small>

    <div className="user__address">
      <p>
        {address.city}
      </p>
      <p>
        {address.street}
          &nbsp;
        {address.suite}
      </p>
      <p>
        {address.zipcode}
      </p>
    </div>

  </div>
);

User.propTypes = userShape.isRequired;
