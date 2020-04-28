import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
const User = ({ name, email, address }) => (
  <div className="personalInfo">
    <h3 className="personalInfo__name">
      {name}
    </h3>
    <p className="personalInfo__email">
      <a href={`mailto=${email}`}>
        {email}
      </a>
    </p>
    <address className="personalInfo__address">
      <span>
        {address.street}
        ,&nbsp;
        {address.suite}
        ,&nbsp;
      </span>
      <span>
        {address.city}
        ,&nbsp;
      </span>
      <span>
        {address.zipcode}
        ,&nbsp;
      </span>
    </address>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default User;
