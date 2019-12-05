import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="comment">
    <ul>
      <li>{comment.name}</li>
      <li>{comment.body}</li>
      <li>{comment.email}</li>
    </ul>
  </div>
);

Comment.propTypes = { comment: PropTypes.objectOf(PropTypes.any).isRequired };

export default Comment;
