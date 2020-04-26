/* eslint-disable react/jsx-one-expression-per-line */
/* Added the above line to make JSX lines be visually more understandable */

import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <div className="comment__list">
    <span className="highlighter">Comments:</span>
    {comments.map(comment => (
      <div className="singleComment" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
      PropTypes.number.isRequired,
    ]),
  ).isRequired,
};

export default CommentList;
