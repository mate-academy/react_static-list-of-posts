import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.css';
import { commentListShape } from '../Shapes/CommentListShape';

const CommentList = ({ comments }) => (
  <ul className="comments__list">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentListShape).isRequired,
};

export default CommentList;
