import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ name, username, email, street, suite, city, zipcode }) => (
  <div className="user">
    <h2 className="user__nick">
      {`Post by: ${username}`}
    </h2>
    <p className="user__contacts">
      <div className="user__contacts-item">
        {name}<br />
      </div>
      <div className="user__contacts-item">
        {street} {suite}<br />
      </div>
      <div className="user__contacts-item">
        {city} {zipcode}<br />
      </div>
      <div className="user__contacts-item">
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
};

export default User;
