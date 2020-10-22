import React from 'react';
import PropTypes from 'prop-types';

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

User.propTypes = PropTypes.shape(UserPropTypes).isRequired;
