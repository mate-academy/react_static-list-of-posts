import React from 'react';

import {UserShape} from '../types';

const User = ({id, name, email, address}) => (
  <div key={id}>
    <p>Name: {name}</p>
    <a href={`mailto:${email}`}>
      <strong>
        Email
      </strong>
    </a>
    <p>
      Address: {address.city} {address.street} {address.suit}
    </p>
  </div>
)

User.propTypes = {
  user: UserShape,
}

export default User;
