import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__item comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.shape({
      name: PropTypes.string,
      body: PropTypes.string,
      email: PropTypes.string,
    }),
  })).isRequired,
};
