import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    <h3 className="comment-title">Comments:</h3>
    {comments.map(comment => (
      <li className="comment-item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentList.defaultProps = {
  comments: [],
};
