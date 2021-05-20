import React from 'react';
import { PropTypes } from 'prop-types';

export function Comment({ comment }) {
  return (
    <div className="comment">
      <div>
        Title:
        {' '}
        {comment.name}
      </div>
      <div>
        Comment:
        {' '}
        {comment.body}
      </div>
      <div>
        From user:
        {' '}
        {comment.email}
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
