import React from 'react';
import PropTypes from 'prop-types';

const User = ({ post, users }) => {
  const findAuthor = (singlePost, usersList) => (
    usersList.find(user => singlePost.userId === user.id)
  );

  const author = findAuthor(post, users);

  return (
    <p className="post__author">
      <span>{author.name}</span>
      <br />
      <span>{author.email}</span>
      <address>{author.address.city}</address>
    </p>
  );
};

User.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
  users: PropTypes.arrayOf(PropTypes.object),
};

User.defaultProps = {
  post: {},
  users: [{}],
};

export default User;
