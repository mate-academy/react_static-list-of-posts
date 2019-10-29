import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment__name">
        {comment.name}
      </div>
      <div className="comment__email">
        {comment.email}
      </div>
      <div className="comment__body">
        {comment.body}
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
};
