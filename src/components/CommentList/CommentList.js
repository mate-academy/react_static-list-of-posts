import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({ comments }) => (
  <ul className="comments__list">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
  })).isRequired,
};

export default CommentList;
