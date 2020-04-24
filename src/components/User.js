import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ name, email, address }) => (
  <>
    <h3 className="personalInfo__name">
      {name}
    </h3>
    <p className="personalInfo__email">
      <strong>
        <a href={`mailto=${email}`}>
          {email}
        </a>
      </strong>
    </p>
    <address className="personalInfo__address">
      <span>
        {address.street}
        {address.suite}
      </span>
      <span>{address.city}</span>
      <span>{address.zipcode}</span>
    </address>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,

};
export default User;
