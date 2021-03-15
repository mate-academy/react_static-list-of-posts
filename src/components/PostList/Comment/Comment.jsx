import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ comments }) => (
  <div className="comment" key={comments.id}>
    <div className="comment__name">
      {comments.name}
    </div>
    <div className="comment__email">
      {comments.email}
    </div>
    <div className="comment__text">
      {comments.body}
    </div>
  </div>
);

Comment.propTypes = {
  comments: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
