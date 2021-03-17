import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <h4 className="User__name">
      {name}
    </h4>
    <div className="User__address">
      <span>
        {address.city}
      </span>
      <span>
        {address.zipcode}
      </span>
    </div>
    <a href={`mailto:${email}`} className="User__email">
      {email}
    </a>
  </div>
);

User.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }),
}).isRequired;
