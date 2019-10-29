import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="author">
      <div className="author__name">
        {user.name}
      </div>
      <div className="author__address">
        {`city: ${user.address.city} street: ${user.address.street}`}
      </div>
      <div className="author__email">
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default User;
