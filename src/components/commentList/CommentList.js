import React from 'react';
import PropTypes from 'prop-types';
import { Comment, commentPropTypes } from '../comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentPropTypes).isRequired,
  ).isRequired,
};

export default CommentList;
