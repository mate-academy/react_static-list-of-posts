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
        <b>Street:</b>
        {' '}
        <i>{address.street}</i>
      </p>
      <p>
        <b>Suite:</b>
        {' '}
        <i>{address.suite}</i>
      </p>
      <p>
        <b>City:</b>
        {' '}
        <i>{address.city}</i>
      </p>
      <p>
        <b>Zipcode:</b>
        {' '}
        <i>{address.zipcode}</i>
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
