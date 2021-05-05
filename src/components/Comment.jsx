import React from 'react';
import './comment.scss';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h2>
        {comment.email}
        ,
        {' '}
        {comment.name}
        :
      </h2>
      <span>{comment.body}</span>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
