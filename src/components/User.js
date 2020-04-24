import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="post__user user">
    <p className="user__name">
      {name}
    </p>
    <a href={`mailto:${email}`} className="user__email">
      {email}
    </a>
    <address className="user__address">
      <span>
        {`${address.city}, ${address.street}, ${address.suite}`}
      </span>
    </address>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default User;
