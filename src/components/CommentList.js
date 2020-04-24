import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(comment => (
      <li key={comment.id} className="post__comment comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CommentList;
