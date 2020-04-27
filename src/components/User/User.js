import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ name, username, email, address }) => (
  <div className="user">
    <h2 className="user__nick">
      {`Post by: ${username}`}
    </h2>
    <p className="user__contacts">
      <span className="user__contacts-item">
        {name}
      </span>
      <br />
      <span className="user__contacts-item">
        {`${address.street} ${address.suite}`}
      </span>
      <br />
      <span className="user__contacts-item">
        {`${address.city} ${address.zipcode}`}
      </span>
      <br />
      <span className="user__contacts-item">
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
