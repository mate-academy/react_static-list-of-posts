import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment/Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="App__comment-list">
    {comments.map(comment => (
      <li className="App__comment-item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
