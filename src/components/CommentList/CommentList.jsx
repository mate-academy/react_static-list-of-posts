import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.css';

import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="comments-list">
    <h4>Comments: </h4>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;
