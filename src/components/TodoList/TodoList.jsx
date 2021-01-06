import React from 'react';
import PropTypes from 'prop-types';

export function TodoList({ post, comment, user }) {
  return (
    <>
      <p>
        <span>posts: </span>
        {post.length}
      </p>

      <p>
        <span>comments: </span>
        {comment.length}
      </p>

      <p>
        <span>Users: </span>
        {user.length}
      </p>
    </>
  );
}

TodoList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
  comment: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};
