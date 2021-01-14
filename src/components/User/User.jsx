import React from 'react';
import PropTypes from 'prop-types';
import { TypeAddress } from '../../types';

import './User.scss';

export const User = ({ name, email, address }) => {
  const { street, suite, city, zipcode } = address;

  return (
    <div className="content__user user">
      <p className="user__name">{name}</p>
      <p className="user__email">
        Email:
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className="user__address">
        Place:
        {`str. ${street}, ${suite}, ${city} city, ${zipcode} zip`}
      </p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(TypeAddress).isRequired,
}
