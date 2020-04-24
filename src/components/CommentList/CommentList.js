import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.scss';

const CommentList = ({ comments }) => (
  <ul className="post__comment-list">
    <span>
      <b>Comments:</b>
    </span>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentList;
