import React from 'react';
import PropTypes from 'prop-types';
import { commentShape } from '../shapes';
import './CommentList.css';
import { Comment } from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="post__comments">
    <h3>Comments:</h3>
    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    commentShape,
  ).isRequired,
};

export { CommentList };
