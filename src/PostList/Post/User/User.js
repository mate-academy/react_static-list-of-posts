import React from 'react';
import { userProp } from '../props';

import './User.css';

export const User = ({ name, email, address, id }) => (
  <div className="User" key={id}>

    <b className="User__name">
      {name}
        &nbsp;
    </b>

    <small className="User__mail">{email}</small>

    <div className="User__address">
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

User.propTypes = userProp.isRequired;
