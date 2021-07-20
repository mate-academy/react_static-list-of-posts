import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/comment';
import './commentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment">
    {comments.map(comment => (
      <li key={comment.id} className="comment__item">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
