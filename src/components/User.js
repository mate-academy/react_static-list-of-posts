import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="author">
    <div className="author_name">
      <p>{name}</p>
      <p>
        <a className="author_email" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </div>
    <div className="author_address">
      <p>
        Street:
        {' '}
        {address.street}
      </p>
      <p>
        Suite:
        {' '}
        {address.suite}
      </p>
      <p>
        City:
        {' '}
        {address.city}
      </p>
      <p>
        Zipcode:
        {' '}
        {address.zipcode}
      </p>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  })).isRequired,
};

export default User;
