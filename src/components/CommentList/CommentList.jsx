import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ commentss }) => (
  <ul className="commentsBox">
    <h3 className="commentsHeader">Comments:</h3>
    {commentss.map(comment => (
      <li key={comment.id} className="commentsLi">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
