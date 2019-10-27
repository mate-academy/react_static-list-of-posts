import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <li>
      {comment.body}
      <br />
      Author:
      {comment.name}
      <br />
      <a href={`mailto: ${comment.email}`}>
        Email
        {comment.name}
      </a>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Comment;
