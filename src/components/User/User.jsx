import React from 'react';
import PropTypes from 'prop-types';
import './User.scss'

export const User = ({ name, email, address }) => (
  <div className="user">
    <span>
      {`Name: ${name}`}
    </span>
    <span>
      {`Email: ${email}`}
    </span>
    <span>
      {`Adress: ${address.city} ${address.street} ${address.suite}`}
    </span>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

User.defaultProps = {
  name: 'No name',
  email: 'No email',
};
