import React from 'react';
import PropTypes from 'prop-types';
import { AddressType } from '../../types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="list__group">
    <span className="list__name">{name}</span>
    <div className="list__mark-email">
      {'e-mail: '}
      <a href={`mailto:${email}`} className="list__email">
        {email}
      </a>
    </div>

    <div className="list__address">
      <span>
        {'Address: '}
      </span>
      <span className="list__city">
        {`${address.city},
        ${address.street}`}
      </span>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressType.isRequired,
};
