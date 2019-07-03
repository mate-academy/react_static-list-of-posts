import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ commentItem }) => (
  <div className="comment_box">
    <div>
      <span className="comment_author">{commentItem.name}</span>
      <span>{commentItem.email}</span>
    </div>
    <p>{commentItem.body}</p>
  </div>
);

Comment.propTypes = {
  commentItem: PropTypes.shape({
    body: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Comment;
