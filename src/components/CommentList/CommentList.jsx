import React from 'react';
import PropTypes from 'prop-types';
import './commentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ol className="comments__list">
    {comments.map(comment => (
      <li key={comment.id} className="comments__item">
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
