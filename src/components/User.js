import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <>
      <div className="post-list__post-author-info">
        <div>
          <span>Author:</span>
          {` ${user.name}`}
        </div>
        <div>
          <span>Address:</span>
          {` ${user.address.city}`}
,
          {` ${user.address.street}`}
,
          {` ${user.address.suite}`}
        </div>
        <div>
          <span>email:</span>
          {` ${user.email}`}
        </div>
      </div>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
    }),
    email: PropTypes.string,
  }).isRequired,
};

export default User;
