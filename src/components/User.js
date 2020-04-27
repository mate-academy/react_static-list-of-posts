import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, street, suite, city, zipcode }) => (
  <div className="posts__user user">
    <div className="user__name">
      <p>
        {name}
      </p>
      <p>
        {email}
      </p>
    </div>
    <div className="user__adress">
      <p>
        Street: &nbsp;
        {street}
      </p>
      <p>
        Suite: &nbsp;
        {suite}
      </p>
      <p>
        City: &nbsp;
        {city}
      </p>
      <p>
        Zipcode: &nbsp;
        {zipcode}
      </p>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
};

export default User;
