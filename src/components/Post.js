import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Post({
  title,
  body,
  user,
}) {
  return (
    <div className="postbox">
      <h1>{title}</h1>
      <p>{body}</p>
      <User {...user} />
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Post;
