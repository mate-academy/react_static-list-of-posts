import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="Post__User User">
    <h3 className="User__name">
      {`Author: ${name}`}
    </h3>

    <div className="User__details">
      <div className="User__email">
        {`Email: ${email}`}
      </div>
      <div className="User__address">
        {`Address: ${address.street}, ${address.suite}`}
      </div>
    </div>
  </div>
);

User.propTypes = UserShape;
