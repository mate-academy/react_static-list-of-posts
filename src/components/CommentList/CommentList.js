import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './commentList.css';

export const CommentList = ({ commentsList }) => (
  <ul className="comments">
    {commentsList.map(comment => (
      <li className="comments__item" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
