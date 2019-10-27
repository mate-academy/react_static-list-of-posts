import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <li className="nestedUl">
      <div>{comment.body}</div>
      <div>{`Author: ${comment.name}`}</div>
      <a href={`mailto: ${comment.email}`}>
        {`Email ${comment.name}`}
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
