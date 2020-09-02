import React from 'react';
import './CommentsList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ postComments }) => (
  <ul className="commentsList">
    {postComments.map(comment => (
      <li className="commentsList__item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  postComments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
