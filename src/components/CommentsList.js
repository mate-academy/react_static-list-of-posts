import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comment }) => (

  <div className="comment-list">
    <div>
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  </div>
);

CommentList.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
export default CommentList;
