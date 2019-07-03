import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <>
      <div className="post-list__post-author-info">
        <div><span>Author:</span> {props.user.name}</div>
        <div><span>Address:</span> {props.user.address.city}, {props.user.address.street}, {props.user.address.suite}</div>
        <div><span>email:</span> {props.user.email}</div>
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
