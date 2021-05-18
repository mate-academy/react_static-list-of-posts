import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <>
    <h2 className="user-name">
      {name}
    </h2>
    <p>
      {`Contact info ${email}`}
    </p>
    <p>
      {`From ${address.city}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
