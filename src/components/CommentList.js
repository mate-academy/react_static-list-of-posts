import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(currentComment => (
      <Comment {...currentComment} key={currentComment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CommentList;
