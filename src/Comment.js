import React from 'react';
import PropTypes from 'prop-types'

const Comment = ({ comment }) => (
  <div>
    <div className="title-group">
      <span className="CommentList__user">{comment.email}:</span>
      <span className="title"> {comment.name}</span>
    </div>
    <span>{comment.body} </span>
  </div>
);

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

  export default Comment;
