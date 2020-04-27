import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ name, email, address }) => (
  <div className="post__user user">
    <h4 className="user__name">{name}</h4>
    <p className="user__email">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </p>
    <p>
      City:
      <br />
      <span className="user__address">{address.city}</span>
    </p>
    <p>
      Street:
      <br />
      <span className="user__address">{address.street}</span>
    </p>
    <p>
      Address:
      <br />
      <span className="user__address">{address.suite}</span>
    </p>
  </div>
);

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
