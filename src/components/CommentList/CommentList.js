import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    <h4 className="comments__title">Comments:</h4>

    <ul className="comments__section">
      {comments.map(comment => (
        <li key={comment.id} className="comments__item">
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
