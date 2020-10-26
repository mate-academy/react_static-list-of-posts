import React from 'react';

import { UserPropTypes } from './propTypes/UserPropTypes';

export const User = ({ name, email, address }) => (
  <div>
    <div>
      {email}
    </div>
    <div>
      {`${name} from ${address.city}`}
    </div>
  </div>
);

User.propTypes = UserPropTypes;
